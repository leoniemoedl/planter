import Service from "../../common/services/Service";
import Plant from "../classes/Plant";
import { CreatePlantDto, PlantDto } from "../dtos";

// i know Plant,Plant looks weird, it's just for preparing other necessary types (such as CreatePlantDto)
export default class DumbPlantService extends Service<CreatePlantDto, Plant> {

    create(createPlantDto: CreatePlantDto, callback?: ((r: Plant) => void) | undefined): Promise<Plant> {
        const id = Date.UTC.toString();
        
        // created plant dto basically represents the response
        const createdPlantDto : PlantDto = {
            id: id,
            ...createPlantDto,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // convert it to plant
        const createdPlant = new Plant({...createdPlantDto});
        if (callback) callback(createdPlant);
        // TODO check if we need return values or if we just use the callback to handle store update
        return new Promise(() => createdPlant);
    }

    get(id: string, callback?: ((r: Plant) => void) | undefined): Promise<Plant> {
        throw new Error("Method not implemented.");
    }

    update(updatedEntity: Plant, callback?: ((r: Plant) => void) | undefined): Promise<void> {
        if (callback) callback(updatedEntity);
        return new Promise(() => { });
    }

    delete(id: string, callback?: ((id: string) => void) | undefined): Promise<void> {
        if (callback) callback(id);
        return new Promise(() => { });
    }
}

