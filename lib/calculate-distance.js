'use strict'

const axios = require('axios')
const querystring = require('querystring')
const repackResults = require('./repack-result')
const config = require('../config')
const logger = require('./logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['calculate-distance', 'origin', data.origin, 'destination', data.destination, 'waypoints', data.waypoints, 'start'])
    let options = {
      origin: data.origin,
      destination: data.destination,
      mode: 'walking',
      key: config.DISTANCE_API_KEY
    }

    if (data.waypoints) {
      options.waypoints = data.waypoints.join('|')
    }

    const url = `https://maps.googleapis.com/maps/api/directions/json?${querystring.stringify(options)}`
    logger('info', ['calculate-distance', 'url', url, 'ready'])
    try {
      const results = await axios(url)
      logger('info', ['calculate-distance', 'origin', data.origin, 'destination', data.destination, 'waypoints', data.waypoints, 'success'])
      resolve(repackResults(results.data))
    } catch (error) {
      logger('error', ['calculate-distance', 'origin', data.origin, 'destination', data.destination, 'waypoints', data.waypoints, error])
      reject(error)
    }
  })
}
