import Entity, { EntityAttributes } from "../../common/classes/Entity";
import { PlantDto } from "../dtos";


const WATERING_THRESHOLD = 3;

const getDiffDays = (date: Date) => { // TODO gehört das hierher? man braucht das eigentlich nur hier in der Pflanzen-Klasse und man kann nicht von außerhalb drauf zugreifen, weil es nicht exportiert wird
    let currentDate: Date = new Date();
    let diffTime = currentDate.getTime() - date.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));
}

export default class Plant extends Entity implements PlantDto {
    name: string;
    id: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;

    constructor(data: PlantDto) {
        super(data.createdAt, data.updatedAt);
        this.id = Math.random().toString();
        this.name = data.name;
        this.waterCycle = data.waterCycle;
        this.fertilizeCycle = data.fertilizeCycle;
        this.lastWatered = data.lastWatered;
        this.lastFertilized = data.lastFertilized;
    }

    needsToBeWateredIn(): number {
        return getDiffDays(this.lastWatered);
    }

    needsToBeFertilazedIn(): number {
        return getDiffDays(this.lastFertilized);
    }

    water(): void {
        this.lastWatered = new Date(); // set to today
    }

    fertilize(): void {
        this.lastFertilized = new Date(); // set to today
    }
}

