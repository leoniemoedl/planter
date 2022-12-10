import Service from "../../common/services/Service";
import Plant from "../classes/Plant";
import { CreatePlantDto } from "../dtos";
import DumbPlantService from "./DumbPlantService";


const plantService = new DumbPlantService();

export default plantService;