import { cloneDeep } from "lodash";
import { useRecoilState } from "recoil";
import plantsState from "../atoms/PlantAtom";
import Plant from "../classes/Plant";
import { CreatePlantDto } from "../dtos";
import plantService from "../services";


// Inge will folgendes noch anschauen 

// Not working
// export function getPlantsThatNeedToBeWatered1(obj : any) {
//     const [plants, setPlants] = useRecoilState(plantsState);
//     setPlants(obj);
// }

// Not working
// export const getPlantsThatNeedToBeWatered3 = () => {
//     const plants = useRecoilValue(plantsState);
//     return plants.filter(plant => plant.age < 5);
// }

// possible but not sure if that is good
// export const getPlantsThatNeedToBeWatered2 = (plants : any[]) => {
//     return plants.filter(plant => plant.age < 5);
// }

// not working
// export const getPlantsThatNeedToBeWatered4 = () => {
//     const plants = useRecoilValue(plantsState);
//     return plants.filter(plant => plant.age < 5);
// }


export default function usePlantsStore() {

    const [plants, setPlants] = useRecoilState(plantsState);

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

    // const getDiffDays = (date: Date) => { // todo: gehört das hierher?
    //     let pastDate: Date = new Date(date);
    //     let currentDate: Date = new Date();
    //     let diffTime = currentDate.getTime() - pastDate.getTime();
    //     return Math.floor(diffTime / (1000 * 3600 * 24));
    // }

    const createPlant = (createPlantDto: CreatePlantDto) => {
        // create plant on backend side. If it worked, create plant from store using a callback function
        plantService.create(
            createPlantDto,
            (createdPlant: Plant) => setPlants(currentPlants => currentPlants.concat([createdPlant]))
        )
    }

    const getPlantbyId = (id: string) => {
        // if required plant is already in store, get it directly
        const plant = plants.find(plant => plant.id === id);
        if (plant) return plant;
        // if (plants.has(id)) return plants.get(id);

        // else, use service to get the plant from the backend. If fetching worked error-free, store the retrieved plant using a callback function
        // note: since store gets updated, everything will get rerendered (including components using this getPlantById function, which will then be able to retrieve the required plant)
        plantService.get(
            id,
            (plant: Plant) => setPlants(currentPlants => currentPlants.concat([plant]))
        );
    }

    const updatePlant = (plantDto: Plant) => {
        // update plant on backend side. If it worked, update the store with the updated plant using a callback function
        plantService.update(
            plantDto,
            (plantDto: Plant) => {
                setPlants(currentPlants => currentPlants.map(plant => plant.id !== plantDto.id ? plant : plantDto));
            }
        );
    }

    const deletePlantById = (id: string) => {
        plantService.delete(
            id,
            (id: string) => setPlants((currentPlants) => currentPlants.filter(plant => plant.id !== id))
        );
    }

    return {
        // plants : [...plants.values()],
        plants,
        createPlant,
        updatePlant,
        waterPlantById,
        fertilizePlantById,
        deletePlantById,
        getPlantbyId,
        // getDiffDays
    }

}
