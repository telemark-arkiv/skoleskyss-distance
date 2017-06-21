'use strict'

const logger = require('./logger')

module.export = data => {
  return new Promise((resolve, reject) => {
    logger('info', ['calculate-distance', 'start'])
    resolve(data)
  })
}
