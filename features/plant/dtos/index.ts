import { EntityAttributes } from "../../common/classes/Entity";

export interface PlantDto extends EntityAttributes{
    name: string;
    id: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;
}

export interface CreatePlantDto {
    name: string;
    waterCycle: number;
    fertilizeCycle: number;
    lastWatered: Date;
    lastFertilized: Date;
}