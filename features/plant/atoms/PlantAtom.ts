import { atom } from "recoil";
import Plant from "../classes/Plant";

const plantsState = atom({
    key: 'plants',
    default: [new Plant({
        id: '0',
        name: "Susi",
        waterCycle: 5,
        fertilizeCycle: 5,
        lastWatered: new Date(),
        lastFertilized: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        image: '',
    }),
    new Plant({
        id: '1',
        name: 'Steve',
        waterCycle: 3,
        fertilizeCycle: 21,
        lastWatered: new Date(),
        lastFertilized: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        image: '',
    }),
    new Plant({
        id: '2',
        name: 'Fritz',
        waterCycle: 5,
        fertilizeCycle: 20,
        lastWatered: new Date(),
        lastFertilized: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        image: '',
    })]
    // TODO I DONT KNOW WHY REACTIVITY IS NOT WORKING WITH MAP >.< , figure it out
});


export default plantsState;