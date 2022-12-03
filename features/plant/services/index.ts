import Service from "../../common/services/Service";
import Plant from "../classes/Plant";
import DumbPlantService from "./DumbPlantService";


const plantService: Service<Plant, Plant> = new DumbPlantService();

export default plantService;