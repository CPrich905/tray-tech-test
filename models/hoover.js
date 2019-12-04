'use strict'
// create model similar to space invaders movement.

module.exports = class Hoover {
  constructor(position, roomSize, dirtPatch) {
    this.position = position
    this.roomSize = roomSize
    this.dirtPatch = dirtPatch
    this.trophies = 0
  }

  //movement parameters come as array of letters. Index 0 = E/W Index 1 = N/S
  // moveOrders checks through movement orders & assigns index to increase (north/east) or decrease (south/west) the position index. Returns error message if input is not recognised.
  moveOrders(direction) {
    let moveReport;
    switch(direction) {
      case 'N':
        moveReport= this.moveNE(1)
        break;
      case 'S':
        moveReport = this.moveSW(1)
        break;
      case 'E':
        moveReport = this.moveNE(0)
        break;
      case 'W':
        moveReport = this.movesSW(0)
        break;
      default:
        moveReport = `Wrong way! Movement of ${direction} not recognised`;
        break;
    }
    return moveReport
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