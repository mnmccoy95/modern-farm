
let plantsInField = [];

export const addPlant = (seed) => {
    for (const obj of seed) {
        plantsInField.push(obj)
    };
    };

export  const usePlants = () => {
    return plantsInField;
}

export const tryPlants = () => {
    return plantsInField;
}