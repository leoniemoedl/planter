import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import usePlant from '../features/plant/hooks/usePlant';
import usePlantsStore from '../features/plant/hooks/usePlantsStore';
import CustomButton from './CustomButton';

interface PlantItemProps {
    plantId: string;
}

export default function PlantItem(props: PlantItemProps) {

    const { waterPlantById, fertilizePlantById } = usePlantsStore();
    const {plant} = usePlant(props.plantId);
    // const plant = getPlantbyId(props.plantId);
    // const {plant} = usePlant(props.plantId);

    // const {getPlantbyId} = usePlantsStore();
    // const plant = getPlantbyId(props.plantId);


    if (!plant) return <div></div>

    const waterHandler = () => {
        waterPlantById(plant.id);
    }

    const fertilizeHandler = () => {
        fertilizePlantById(plant.id);
    }

    return (
        <Pressable>
            <View style={styles.plantItem} >
                <Text>{plant.name}</Text>
                <View style={styles.userInteraction} >
                    <View style={styles.col} >
                        <Text>Neews water in {plant.needsToBeWateredIn()} days</Text>
                        <Text>Water rhythm: {plant.waterCycle} days</Text>
                        <CustomButton title='give water' onPress={waterHandler} />
                    </View>
                    <View style={styles.col} >
                        <Text>Neews fertilizer in {plant.needsToBeFertilazedIn()} days</Text>
                        <Text>Fertilizer rhythm: {plant.fertilizeCycle} days</Text>
                        <CustomButton title='fertilize' onPress={fertilizeHandler} />
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    plantItem: {
        justifyContent: 'space-between',
        padding: 10,
        margin: 8,
        backgroundColor: '#2EB086',
    },
    userInteraction: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    col: {
    },
    plantBTNs: {
        flexDirection: 'row',
    },

});