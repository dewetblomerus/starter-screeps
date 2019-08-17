const runHarvester = require('runHarvester')
const runUpgrader = require('runUpgrader')

const creepManager = () => {
  for (const name in Game.creeps) {
    const creep = Game.creeps[name]
    if (creep.memory.role == 'harvester') {
      runHarvester(creep)
    }
    if (creep.memory.role == 'upgrader') {
      runUpgrader(creep)
    }
  }
}

module.exports = creepManager