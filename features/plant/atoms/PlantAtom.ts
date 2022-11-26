import { atom } from "recoil";
import Plant from "../classes/Plant";

const plantListState = atom({
    key: 'PlantList',
    default: [new Plant({
        id : "0",
        name : "susi",
        waterCycle : 5,
        fertilizeCycle : 5,
        lastWatered : new Date()
    })],
});

export default plantListState;