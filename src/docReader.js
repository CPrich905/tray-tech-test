// readline and fs
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
    dirtPatch: [],
    moveOrders: []
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
      readData.moveOrders = line.split('')
    } else {
      readData.dirtPatch.push([parseInt(line[0]), parseInt(line[2])])
    }
    index ++
    // console.log(`line from file: ${line}`)
  }

  // console.log(readData) 
  return readData
}