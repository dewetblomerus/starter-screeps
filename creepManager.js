const harvester = require('harvester')
const upgrader = require('upgrader')

const creepManager = () => {
  for (const name in Game.creeps) {
    const creep = Game.creeps[name]
    if (creep.memory.role == 'harvester') {
      harvester(creep)
    }
    if (creep.memory.role == 'upgrader') {
      upgrader(creep)
    }
  }
}

module.exports = creepManager
