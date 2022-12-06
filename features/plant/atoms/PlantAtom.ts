import { atom } from "recoil";
import Plant from "../classes/Plant";

const plantsState = atom({
    key: 'plants',
    default: [new Plant({
        name : "Susi",
        waterCycle : 5,
        fertilizeCycle : 5,
        lastWatered : new Date(),
        lastFertilized: new Date()
    }),
    new Plant({
        name: 'Steve',
        waterCycle: 3,
        fertilizeCycle: 21,
        lastWatered: new Date(),
        lastFertilized: new Date()
    }),
    new Plant({
        name: 'Fritz',
        waterCycle: 5,
        fertilizeCycle: 20,
        lastWatered: new Date(),
        lastFertilized: new Date()
    })]
    // I DONT KNOW WHY REACTIVITY IS NOT WORKING WITH MAP >.<
    // default: new Map<string, Plant>([
    //     ["0", new Plant({
    //         id: '0',
    //         name: 'Fritz',
    //         waterCycle: 5,
    //         fertilizeCycle: 20,
    //         lastWatered: new Date(),
    //         lastFertilized: new Date()
    //     })],
    //     ["1", new Plant({
    //         id: '1',
    //         name: 'Fritz',
    //         waterCycle: 5,
    //         fertilizeCycle: 20,
    //         lastWatered: new Date(),
    //         lastFertilized: new Date()
    //     })],
    //     ["2", new Plant({
    //         id: '2',
    //         name: 'Fritz',
    //         waterCycle: 5,
    //         fertilizeCycle: 20,
    //         lastWatered: new Date(),
    //         lastFertilized: new Date()
    //     })],
    // ])
});


export default plantsState;