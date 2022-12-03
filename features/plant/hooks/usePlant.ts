import usePlantsStore from "./usePlantsStore";


export default function usePlant(id: string) {
    const { getPlantbyId } = usePlantsStore();

    return {
        plant: getPlantbyId(id)
    }
}