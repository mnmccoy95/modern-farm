
export const harvestPlants = (plantsInField) => {

    for (const obj of plantsInField) {
        if (obj.output === 2) {
            plantsInField.push(obj)
        }

    }

}
