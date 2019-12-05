'use strict'
// create model & movement fns - space invaders.

module.exports = class Hoover {
  constructor(position, roomSize, dirtPatches) {
    this.position = position
    this.roomSize = roomSize
    this.dirtPatches = dirtPatches
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
    // check for dirtPatches
    this.checkDirt()
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

  checkDirt() {
    if (!this.dirtPatches) return this.trophies;

    this.dirtPatches.forEach((patch, i) => {
      if(patch[0] === this.position[0] && patch[1] === this.position[1]) {
        this.trophies += 1
        this.cleanUp(i)
      }
    });
    return this.trophies
  }

  //splices the matching dirtPatch from dirtPatches array.
  cleanUp(dirtPatch) {
    return this.dirtPatches.splice(dirtPatch, 1)
  }
}