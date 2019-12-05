const reader = require('../src/docReader')

expectedOutput = {
  roomSize: [5,5],
  position: [1,2],
  dirtPatch: [[1,0],[2,2],[2,3]],
  moves: ['N','N','E','S','E','E','S','W','N','W','W']
}

describe('reader', () => {
  it('returns obj from file.', () => {
    return expect(reader('testdata.txt')).resolves.toEqual(expectedOutput)
  })
})