'use strict'

const Hoover = require('../models/hoover')

describe ('hoover', () => {
  describe('#moveHoover', () => {
    it('hoover moves N in room space', () => {
      const hoover= new Hoover([0,0],[5,5],[1,1])
      expect(hoover.moveHoover('N')).toEqual([0,1])
    })
    it('hoover doesn\'t move N out of room space', () => {
      const hoover= new Hoover([0,5],[5,5],[1,1])
      expect(hoover.moveHoover('N')).toEqual([0,5])
    })
    it('hoover doesn\'t move S out of room space', () => {
      const hoover = new Hoover([0,0],[5,5],[1,1])
      expect(hoover.moveHoover('S')).toEqual([0,0])
    })
    it('hoover doesn\'t move W out of room space', () => {
      const hoover = new Hoover([0,0],[5,5],[1,1])
      expect(hoover.moveHoover('W')).toEqual([0,0])
    })
    it('hoover moves E within room space', () => {
      const hoover = new Hoover([0,0],[5,5],[1,1])
      expect(hoover.moveHoover('E')).toEqual([1,0])
    })
  })
})