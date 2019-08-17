const creepSpawner = require('creepSpawner')
const creepManager = require('creepManager')
const clearMemory = require('clearMemory')

module.exports.loop = function() {
  clearMemory()
  creepSpawner()
  creepManager()
}
