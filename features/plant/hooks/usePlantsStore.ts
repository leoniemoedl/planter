import { cloneDeep } from "lodash";
import { useRecoilState } from "recoil";
import useError from "../../common/hooks/useError";
import useLoading from "../../common/hooks/useLoading";
import plantsState from "../atoms/PlantAtom";
import Plant from "../classes/Plant";
import { CreatePlantDto } from "../dtos";
import plantService from "../services";

export default function usePlantsStore() {

    const [plants, setPlants] = useRecoilState(plantsState);
    const { loading, startLoading, stopLoading } = useLoading();
    const { isError, turnOnError, turnOfError } = useError();

    const waterPlantById = (id: string) => {
        const plant = cloneDeep(getPlantbyId(id) as Plant);
        plant.water();

        updatePlant(plant);
    }

    const fertilizePlantById = (id: string) => {
        const plant = cloneDeep(getPlantbyId(id) as Plant);
        plant.fertilize();

        updatePlant(plant);
    }

    const fetchAllPlants = () => {

    }

    const createPlant = (createPlantDto: CreatePlantDto) => {
        startLoading();
        // create plant on backend side. If it worked, create plant from store using a callback function
        plantService.create(
            createPlantDto,
            (createdPlant: Plant) => setPlants(currentPlants => currentPlants.concat([createdPlant]))
        )
            .catch((e) => turnOnError())
            .finally(() => stopLoading())
    }

    const getPlantbyId = (id: string) => {
        // if required plant is already in store, get it directly
        const plant = plants.find(plant => plant.id === id);
        if (plant) return plant;
        // if (plants.has(id)) return plants.get(id);

        // else, use service to get the plant from the backend. If fetching worked error-free, store the retrieved plant using a callback function
        // note: since store gets updated, everything will get rerendered (including components using this getPlantById function, which will then be able to retrieve the required plant)
        startLoading();
        plantService.get(
            id,
            (plant: Plant) => setPlants(currentPlants => currentPlants.concat([plant]))
        )
            .catch((e) => turnOnError())
            .finally(() => stopLoading());
    }

    const updatePlant = (plantDto: Plant) => {
        // update plant on backend side. If it worked, update the store with the updated plant using a callback function
        startLoading();
        plantService.update(
            plantDto,
            (plantDto: Plant) => {
                setPlants(currentPlants => currentPlants.map(plant => plant.id !== plantDto.id ? plant : plantDto));
            }
        )
            .catch((e) => turnOnError())
            .finally(() => stopLoading());
    }

    const deletePlantById = (id: string) => {
        startLoading();
        plantService.delete(
            id,
            () => setPlants((currentPlants) => currentPlants.filter(plant => plant.id !== id))
        )
            .catch((e) => turnOnError())
            .finally(() => stopLoading());
    }

    return {
        plants,
        createPlant,
        updatePlant,
        waterPlantById,
        fertilizePlantById,
        deletePlantById,
        getPlantbyId,
        loading,
        isError,
        turnOfError,
    }

}
