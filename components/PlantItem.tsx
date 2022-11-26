import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useRecoilValue } from 'recoil';
import plantListState from '../features/plant/atoms/PlantAtom';
import Plant from '../features/plant/classes/Plant';
import usePlants from '../features/plant/hooks/usePlants';
import CustomButton from './CustomButton';

interface PlantItemProps {
    plantId: string;
    text: string;
}

export default function PlantItem(props: PlantItemProps) {

    const { getPlantbyId, plantsThatNeedToBeWatered, updatePlants } = usePlants();
    const plant = getPlantbyId(props.plantId);

    if (!plant) return <div></div>

    const [waterCycle, setWaterCycle] = useState(0);
    const test = () => {
        console.log(props.text);
    }

    const handleClick = () => {

    }

    return (
        <Pressable>
            <View style={styles.plantItem} >
                <Text>{props.text}</Text>
                <View style={styles.userInteraction} >
                    <View style={styles.col} >
                        <Text>Water rhythm: {plant.waterCycle} days</Text>
                        <CustomButton title='give water' onPress={plant.lastWatered} />
                    </View>
                    <View style={styles.col} >
                        <Text>Fertilizer rhythm: {plant.fertilizeCycle} weeks</Text>
                        <CustomButton title='fertilize' />
                    </View>
                </View>

                {/* <View style={styles.plantBTNs}>
                    <Button title='edit' color='#B8405E' />
                    <Button title='delete' color='#B8405E' onPress={props.onDeletePlant.bind(this, props.id)} />
                </View> */}
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