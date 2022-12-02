import { useRecoilState, useRecoilValue } from "recoil";
import plantListState from "../atoms/PlantAtom";
import Plant from "../classes/Plant";


// SHIT
// export function getPlantsThatNeedToBeWatered1(obj : any) {
//     const [plantList, setPlantList] = useRecoilState(plantListState);
//     setPlantList(obj);
// }

// export const getPlantsThatNeedToBeWatered3 = () => {
//     const plantList = useRecoilValue(plantListState);
//     return plantList.filter(plant => plant.age < 5);
// }

// export const getPlantsThatNeedToBeWatered2 = (plantList : any[]) => {
//     return plantList.filter(plant => plant.age < 5);
// }

// export const getPlantsThatNeedToBeWatered4 = () => {
//     const plantList = useRecoilValue(plantListState);
//     return plantList.filter(plant => plant.age < 5);
// }


export default function usePlants() {

    const [plantList, setPlantList] = useRecoilState(plantListState);

    // const plantsThatNeedToBeWatered = plantList.filter(plant => plant.needsToBeWatered());

    const addPlant = (plant : Plant) => {
        setPlantList(currentPlants =>
            [
                ...currentPlants,
                // { text: enteredPlantName, id: Math.random().toString() },
                plant
            ]
        );
    }

    const updatePlants = (plantDto : any) => {
        // request to server
        
        // if request was successsful, then update plant here
        setPlantList((prevPlantList) => {
            return prevPlantList.map(plant => plant.id === plantDto.id ? plantDto : plant);
        })
    }

    const waterPlantById = (id : string) => {
        console.log('yay gegossen');
    }

    const fertilizePlantById = (id : string) => {
        console.log('yay gedüngt');
    }

    const fetchAllPlants = () => {

    }

    const deletePlantById = (id : string) => {
        // request to server

        // if request was successsful, then update plant here
        setPlantList((prevPlantList) => {
            return prevPlantList.filter(plant => plant.id !== id);
        })
    } 

    const getPlantbyId = (id: string) => {
        return plantList.find(plant => plant.id === id);
    }

    const getDiffDays = (date: Date) => { // todo: gehört das hierher?
        let pastDate : Date = new Date(date);
        let currentDate : Date = new Date();
        let diffTime = currentDate.getTime() - pastDate.getTime();
        return Math.floor(diffTime / (1000 * 3600 * 24));
    }

    return {
        plantList,
        addPlant,
        // plantsThatNeedToBeWatered,
        updatePlants,
        waterPlantById,
        fertilizePlantById,
        deletePlantById,
        getPlantbyId,
        getDiffDays
    }

}