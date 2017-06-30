'use strict'

const querystring = require('querystring')
const config = require('../config')
const logger = require('./logger')

module.exports = results => {
  const route = results.routes[0]
  const cleanPolylines = querystring.escape(route.overview_polyline.points)
  let distanceValue = 0
  logger('info', ['repack-result', 'start'])

  route.legs.forEach(item => {
    distanceValue += item.distance.value
  })

  const distanceKm = distanceValue / 1000
  const distance = distanceKm.toFixed(2).toString().replace('.', ',') + ' km'
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?key=${config.DISTANCE_API_KEY}&size=1000x1000&path=weight:3|color:blue|enc:${cleanPolylines}`

  const repacked = {
    distance: distance,
    distanceValue: distanceValue,
    staticMapUrl: staticMapUrl
  }

  logger('info', ['repack-result', repacked.distance, repacked.distanceValue, 'finished'])

  return repacked
}
