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


plantSeeds(yearlyPlan)

const plantsInField = usePlants()

console.log("the plants in the field are", plantsInField)

harvestPlants(plantsInField)

const harvestedPlants = harvestPlants(plantsInField)

console.log("the harvested amount", harvestedPlants)


import { Catalog } from "./catalog.js"

const HTML = () => {
    const contentElement = document.querySelector(".container")

    let cropHTMLRepresentation = "";
    for (const crops of harvestedPlants) {
        cropHTMLRepresentation += Catalog(crops);
    }

    contentElement.innerHTML += `
        ${cropHTMLRepresentation}
    `
}


HTML()
