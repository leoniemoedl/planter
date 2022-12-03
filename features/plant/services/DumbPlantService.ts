import Service from "../../common/services/Service";
import Plant from "../classes/Plant";

// i know Plant,Plant looks weird, it's just for preparing other necessary types (such as CreatePlantDto)
export default class DumbPlantService extends Service<Plant, Plant> {

    create(plant: Plant, callback?: ((r: Plant) => void) | undefined): Promise<Plant> {
        const id = Date.UTC.toString();
        plant.id = id;
        if (callback) callback(plant);
        // TODO check if we need return values or if we just use the callback to handle store update
        return new Promise(() => plant);
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

