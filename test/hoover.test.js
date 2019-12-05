'use strict'

const Hoover = require('../models/hoover')

describe ('hoover', () => {
  describe('#moveHoover', () => {
    it('hoover moves North in room space', () => {
      const hoover= new Hoover([0,0],[5,5],[1,1])
      expect(hoover.moveHoover('N')).toEqual([0,1])
    })
  })
})