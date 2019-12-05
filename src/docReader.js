// readline - parses each line of file
// fs.createReadStream outputs read file
// path allows import, specify file in module.exports.
const readline = require('readline')
const fs = require('fs')
const path = require('path')

module.exports = async function (input) {
  const inputFile = path.join(__dirname, `../data/${input}`)
  const fileStream = fs.createReadStream(inputFile)

  //sets params for read data. Each line should be an array.
  const readData = {
    position: [],
    roomSize: [],
    dirtPatches: [],
    moves: []
  }

  const rline = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })

  let index = 0

  for await (const line of rline) {
    if (index === 0) {
      readData.roomSize = [parseInt(line[0]), parseInt(line[2])]
    } else if (index === 1) {
      readData.position = [parseInt(line[0]), parseInt(line[2])]
    } else if (line.includes('N', 'E', 'S', 'W')) {
      readData.moves = line.split('')
    } else {
      readData.dirtPatches.push([parseInt(line[0]), parseInt(line[2])])
    }
    index ++
    // console.log(`line from file: ${line}`)
  }

  // console.log(readData) 
  return readData
}