import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (yearlyPlan) => {
    for (const obj of yearlyPlan) {
        if (Array.isArray(obj) === true)
            for (const obj2 of obj) {
                if (obj2 === "Asparagus") {
                    addPlant(createAsparagus())
                }
                else if (obj2 === "Corn") {
                    addPlant(createCorn())
                    
                }
                else if (obj2 === "Potato") {
                    addPlant(createPotato())
                }
                else if (obj2 === "Soybean") {
                    addPlant(createSoybean())
                }
                else if (obj2 === "Sunflower") {
                    addPlant(createSunflower())
                }
                else if (obj2 === "Wheat") {
                    addPlant(createWheat())
                }
            }
        
        }
    }
