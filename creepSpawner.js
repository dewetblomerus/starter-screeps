const creepSpawner = () => {
  if (Object.keys(Game.creeps).length < 2) {
    console.log('we have less than two creeps')

    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester1', {
      memory: { role: 'harvester' },
    })

    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Upgrader1', {
      memory: { role: 'upgrader' },
    })
  }
}

module.exports = creepSpawner
