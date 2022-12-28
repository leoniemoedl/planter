import Plant from "../classes/Plant";
import { CreatePlantDto, PlantDto } from "../dtos";
import PlantService from "./PlantService";

// i know Plant,Plant looks weird, it's just for preparing other necessary types (such as CreatePlantDto)
export default class DumbPlantService extends PlantService {
    loadingIds: Map<string, boolean>;

    constructor() {
        super();
        this.loadingIds = new Map();
    }

    async create(createPlantDto: CreatePlantDto, callback: ((createdPlant: Plant) => void) | undefined) {
        const id = Date.now.toString();

        // created plant dto basically represents the response
        const createdPlantDto: PlantDto = {
            id: id,
            ...createPlantDto,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // convert it to plant
        const createdPlant = PlantDto.toPlant(createdPlantDto);
        if (callback) callback(createdPlant);
    }

    async get(id: string, callback: ((plant: Plant) => void) | undefined) {
        // only do fetch request if no one else is already requesting it
        if (this.loadingIds.has(id)) return;
        this.loadingIds.set(id, true);
        // TODO fetch data
        this.loadingIds.delete(id);
        throw new Error("Method not implemented.");
    }

    async update(updatedPlant: PlantDto, callback: (() => void) | undefined) {
        if (callback) callback();
    }

    async delete(id: string, callback: (() => void) | undefined) {
        if (callback) callback();
    }

    async fetchAllPlants(callback?: ((plants: Plant[]) => void)) {
        return;
    }
}

