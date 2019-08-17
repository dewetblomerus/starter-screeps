const sourceIndex = 1

const chooseSource = creep => {
  const sources = creep.room.find(FIND_SOURCES)
  return sources[sourceIndex]
}

const upgrader = creep => {
  if (creep.memory.upgrading && creep.carry.energy == 0) {
    creep.memory.upgrading = false
    // console.log(`${creep.name} is now harvesting`);
    creep.say('🔄 withdraw')
  }
  if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
    creep.memory.upgrading = true
    console.log(`upgrader setting target: ${creep.room.controller.id}`)
    creep.memory.target = creep.room.controller.id
    // console.log(`${creep.name} is now upgrading`);
    creep.say('⚡ upgrade')
  }

  if (creep.memory.upgrading) {
    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
      // console.log(`${creep.name} is now moving to the controller`);
      let target = Game.getObjectById(creep.memory.target)
      creep.moveTo(target, {
        visualizePathStyle: { stroke: '#ffffff' },
      })
    }
  } else {
    const source = chooseSource(creep)
    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
      creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } })
    }
  }
}

module.exports = upgrader
