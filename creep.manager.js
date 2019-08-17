const roleHarvester = require('role.harvester')
const roleUpgrader = require('role.upgrader')

const creepSpawner = {
  run() {
    for (const name in Game.creeps) {
      const creep = Game.creeps[name]
      if (creep.memory.role == 'harvester') {
        runHarvester(creep)
      }
      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep)
      }
    }
  },
}

module.exports = creepSpawner
