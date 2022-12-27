import Service from "../../common/services/Service";
import Plant from "../classes/Plant";
import { CreatePlantDto } from "../dtos";

export default abstract class PlantService extends Service<CreatePlantDto, Plant> {
    abstract fetchAllPlants(callback?: (plants: Plant[]) => void): Promise<void>
}
