const sourceIndex = 0

const chooseSource = creep => {
  const sources = creep.room.find(FIND_SOURCES)
  return sources[sourceIndex]
}

const chooseTarget = () => {
  return Game.spawns['Spawn1']
}

const harvester = creep => {
  if (creep.memory.depositing && creep.carry.energy == 0) {
    console.log(`Stop Depositing`)
    creep.memory.depositing = false
    creep.say('🔄 harvest')
  }
  if (!creep.memory.depositing && creep.carry.energy == creep.carryCapacity) {
    console.log(`Start Depositing`)
    creep.memory.depositing = true
    creep.say('deposit')
  }

  if (creep.memory.depositing) {
    // console.log(`${creep.name} finding structures`);
    let target = chooseTarget()
    if (target) {
      // console.log('there is a target');
      if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        // console.log(`moving to target: ${target}`);
        const result = creep.moveTo(target, {
          visualizePathStyle: { stroke: '#ffffff' },
        })
        // console.log(result);
      }
    }
  } else {
    const source = chooseSource(creep)
    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } })
    }
  }
}

module.exports = harvester
