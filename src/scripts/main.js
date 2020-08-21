console.log("Welcome to the main module")
import {createPlan} from './plan.js'

createPlan()

const yearlyPlan = createPlan()
console.log("this is the plan", yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

// const cornSeed = createCorn()
// console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

// const potatoSeed = createPotato()
// console.log(potatoSeed)

import { createSunflower } from "./seeds/sunflower.js"

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

import { createSoybean } from "./seeds/soybean.js"

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

import { createWheat } from "./seeds/wheat.js"

// const wheatSeed = createWheat()
// console.log(wheatSeed)



import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

// console.log("the plants in the field are", thing)

plantSeeds(yearlyPlan)

const plantedSeeds = usePlants()

console.log(plantedSeeds)

harvestPlants(plantedSeeds)

const harvestedPlants = harvestPlants(plantedSeeds)
console.log("the harvested amount is", harvestedPlants)


// harvestPlants(plantedSeeds)



