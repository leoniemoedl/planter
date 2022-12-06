

const WATERING_THRESHOLD = 3;

const getDiffDays = (date: Date) => { // TODO gehört das hierher? man braucht das eigentlich nur hier in der Pflanzen-Klasse und man kann nicht von außerhalb drauf zugreifen, weil es nicht exportiert wird
    let currentDate: Date = new Date();
    let diffTime = currentDate.getTime() - date.getTime();
    return Math.floor(diffTime / (1000 * 3600 * 24));
}

export default class Plant {
    name: string;
    id: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;

    constructor(data: { id: string, name: string, waterCycle: number, fertilizeCycle: number, lastWatered: Date, lastFertilized: Date }) {
        this.id = data.id;
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
        return getDiffDays(this.lastWatered);
    }

    water(): void {
        // TODO logic
        this.lastWatered.setDate(this.lastWatered.getDate() + 10);
    }

    fertilize(): void {
        // TODO logic
        this.lastFertilized.setDate(this.lastFertilized.getDate() + 10);
    }
}

