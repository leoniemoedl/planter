import Entity from "../../common/classes/Entity";
import Plant from "../classes/Plant";

export class PlantDto extends Entity {
    name: string;
    id: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;

    static fromPlant(plant : Plant) {
        return plant as PlantDto;
    }

    static toPlant(plantDto : PlantDto) {
        return new Plant(plantDto);
    }
}

export class CreatePlantDto {
    name: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;
}