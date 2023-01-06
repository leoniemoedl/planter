import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, ImageBackground } from 'react-native';
import usePlant from '../hooks/usePlant';
import usePlantsStore from '../hooks/usePlantsStore';
import CustomButton from './CustomButton';

interface PlantItemProps {
    plantId: string;
}

export default function PlantItem(props: PlantItemProps) {

    const { waterPlantById, fertilizePlantById } = usePlantsStore();
    const {plant} = usePlant(props.plantId);

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
                {/* TODO check how to solve this with absolute path */}
                <Image style={styles.img} source={require('../../../assets/plant-images/pilea.jpg')} />
                <View style={styles.info}>
                    <Text style={styles.title}>{plant.name}</Text>
                    <View style={styles.container}>
                        <View style={styles.actionContainer}> 
                            <Text>Needs water in {plant.needsToBeWateredIn()} days</Text>
                            <Text>Water rhythm: {plant.waterCycle} days</Text>
                            <CustomButton title='give water' onPress={waterHandler} />
                        </View>
                        <View style={styles.actionContainer}> 
                            <Text>Needs fertilizer in {plant.needsToBeFertilazedIn()} days</Text>
                            <Text>Fertilizer rhythm: {plant.fertilizeCycle} days</Text>
                            <CustomButton title='fertilize' onPress={fertilizeHandler} />
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    plantItem: {
        flexDirection: 'row',
        height: 160,
        margin: 8,
        backgroundColor: '#2EB086',
    },
    img: {
        flex: 1,
        width: '35%',
        height: '100%'
    },
    info: {
        width: '65%',
        flexDirection: 'column',
        padding: 5
    },
    title: {
        fontSize: 24
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    actionContainer: {
        width: '50%',
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 10
    },
});