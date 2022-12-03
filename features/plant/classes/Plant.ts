

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

    needsToBeWateredIn() : number{
        // let pastDate : Date = new Date(date);
        // let currentDate : Date = new Date();
        // let diffTime = currentDate.getTime() - pastDate.getTime();
        // return Math.floor(diffTime / (1000 * 3600 * 24));
        return 10;
    }

    needsToBeFertilazedIn() : number{
        // let pastDate : Date = new Date(date);
        // let currentDate : Date = new Date();
        // let diffTime = currentDate.getTime() - pastDate.getTime();
        // return Math.floor(diffTime / (1000 * 3600 * 24));
        return 10;
    }

    water() : void {
        this.lastWatered = new Date();
    }
}

