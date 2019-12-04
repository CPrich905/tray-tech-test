'use strict'

const Hoover = require('../models/hoover')

describe ('hoover', () => {
  describe('#moveOrders', () => {
    it('hoover moves North within room space', () => {
      const hoover = new Hoover([0,0],[5,5],[1,1])
      expect(hoover.moveOrders('N')).toEqual([0,1])
    })
  })
})