
export const harvestPlants = (plantedSeeds) => {
    const harvestedSeeds = []
    let objOrder = 0;
    let outputOrder = 0;
    for (let n = 0; n < plantedSeeds.length; n++) {
        objOrder = objOrder + outputOrder;
        if (plantedSeeds[n].type === "Corn") {
            outputOrder = (plantedSeeds[n].output)/2;
            for (let m = 1; m <= outputOrder; m++) {
                const obj = {};
                obj.type = plantedSeeds[n].type;
                obj.height = plantedSeeds[n].height;
                obj.output = plantedSeeds[n].output;
                obj.icon = plantedSeeds[n].icon;
                obj.id = objOrder + m;
                harvestedSeeds.push(obj);
            }
        }
            else {
                outputOrder = plantedSeeds[n].output;
                for (let m = 1; m <= outputOrder; m++){
                    const obj = {};
                    obj.type = plantedSeeds[n].type;
                    obj.height = plantedSeeds[n].height;
                    obj.output = plantedSeeds[n].output;
                    obj.icon = plantedSeeds[n].icon;
                    obj.id = objOrder + m;
                    harvestedSeeds.push(obj);
                }
            }
        }
    return harvestedSeeds;
}
