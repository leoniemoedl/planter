import { cloneDeep } from "lodash";
import { useRecoilState } from "recoil";
import plantsState from "../atoms/PlantAtom";
import Plant from "../classes/Plant";

// SHIT
// export function getPlantsThatNeedToBeWatered1(obj : any) {
//     const [plants, setPlants] = useRecoilState(plantsState);
//     setPlants(obj);
// }

// export const getPlantsThatNeedToBeWatered3 = () => {
//     const plants = useRecoilValue(plantsState);
//     return plants.filter(plant => plant.age < 5);
// }

// export const getPlantsThatNeedToBeWatered2 = (plants : any[]) => {
//     return plants.filter(plant => plant.age < 5);
// }

// export const getPlantsThatNeedToBeWatered4 = () => {
//     const plants = useRecoilValue(plantsState);
//     return plants.filter(plant => plant.age < 5);
// }




export default function usePlantsStore() {

    const [plants, setPlants] = useRecoilState(plantsState);

    // const plantsThatNeedToBeWatered = plants.filter(plant => plant.needsToBeWatered());

    const addPlant = (plant : Plant) => {
        setPlants(currentPlants =>
            [
                ...currentPlants,
                plant
            ]
        );
    }

    const updatePlant = (plantDto : any) => {
        // request to server
        
        // if request was successsful, then update plant here
        setPlants((prevplants) => {
            return prevplants.map(plant => plant.id === plantDto.id ? plantDto : plant);
        })
    }

    const waterPlantById = (id : string) => {
        const plant = cloneDeep(getPlantbyId(id) as Plant);
        plant.water();

        updatePlant(plant);
    }

    const fertilizePlantById = (id : string) => {
        const updatedPlants = plants.map(plant => {
            if (plant.id === id) {
                return { ...plant, lastFertilized: new Date() };
            }
            return plant;
        });
        // setPlants(updatedPlants);
    }

    const fetchAllPlants = () => {

    }

    const deletePlantById = (id : string) => {
        // request to server

        // if request was successsful, then update plant here
        setPlants((prevplants) => {
            return prevplants.filter(plant => plant.id !== id);
        })
    } 

    const getPlantbyId = (id: string) => {
        return plants.find(plant => plant.id === id);
    }

    const getDiffDays = (date: Date) => { // todo: gehört das hierher?
        let pastDate : Date = new Date(date);
        let currentDate : Date = new Date();
        let diffTime = currentDate.getTime() - pastDate.getTime();
        return Math.floor(diffTime / (1000 * 3600 * 24));
    }

    return {
        plants,
        addPlant,
        // plantsThatNeedToBeWatered,
        updatePlant,
        waterPlantById,
        fertilizePlantById,
        deletePlantById,
        getPlantbyId,
        getDiffDays
    }

}
