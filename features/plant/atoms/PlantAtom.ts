import { atom } from "recoil";
import Plant from "../classes/Plant";

const plantsState = atom({
    key: 'plants',
    default: [new Plant({
        id : "0",
        name : "Susi",
        waterCycle : 5,
        fertilizeCycle : 5,
        lastWatered : new Date(),
        lastFertilized: new Date()
    }),
    new Plant({
        id: '1',
        name: 'Steve',
        waterCycle: 3,
        fertilizeCycle: 21,
        lastWatered: new Date(),
        lastFertilized: new Date()
    }),
    new Plant({
        id: '2',
        name: 'Fritz',
        waterCycle: 5,
        fertilizeCycle: 20,
        lastWatered: new Date(),
        lastFertilized: new Date()
    })]
});


export default plantsState;