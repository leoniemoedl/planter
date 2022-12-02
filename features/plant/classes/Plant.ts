

const WATERING_THRESHOLD = 3;

export default class Plant {
    name: string;
    id: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;

    constructor(data : {id : string, name : string, waterCycle: number, fertilizeCycle: number, lastWatered: Date, lastFertilized: Date }) {
        this.id = data.id;
        this.name = data.name;
        this.waterCycle = data.waterCycle;
        this.fertilizeCycle = data.fertilizeCycle;
        this.lastWatered = data.lastWatered;
        this.lastFertilized = data.lastFertilized;
    }

    // needsToBeWatered() {
    //     // TODO
    //     // return this.lastWatered + ;
    //     return WATERING_THRESHOLD < 5;
    // }

}