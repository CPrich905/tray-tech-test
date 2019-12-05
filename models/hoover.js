'use strict'
// create model & movement fns - space invaders.

module.exports = class Hoover {
  constructor(position, roomSize, dirtPatch) {
    this.position = position
    this.roomSize = roomSize
    this.dirtPatch = dirtPatch
    this.trophies = 0
  }

  // movement parameters come as array of letters. Index 0 = E/W Index 1 = N/S
  // moveHoover() checks through movement orders & assigns index to increase (north/east) or decrease (south/west) the position index. Returns error message if input is not recognised.
  moveHoover(direction) {
    let hooverMoves;
    switch(direction) {
      case 'N':
        hooverMoves = this.moveNE(1)
        break;
      case 'S':
        hooverMoves = this.moveSW(1)
        break;
      case 'E':
        hooverMoves = this.moveNE(0)
        break;
      case 'W':
        hooverMoves = this.moveSW(0)
        break;
      default:
        moveHoover= `Wrong way! Movement of ${direction} not recognised`;
        break;
    }
    // check for dirtPatch
    return hooverMoves
  }
  //check movement doesn't go beyond room dimensions. If not, +/- position on relative axis.
  //NE increases axis count, SW decreases axis count
  moveNE(axis){
    if (this.position[axis] + 1 < this.roomSize[axis]) {
      this.position[axis] += 1
    } 
    return this.position
  }
  moveSW(axis){
    if (this.position[axis] - 1 > this.roomSize[axis]) {
      this.position[axis] -= 1
    } 
    return this.position
  }
}