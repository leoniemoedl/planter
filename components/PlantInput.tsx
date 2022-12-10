import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Text, Alert } from 'react-native';
import Plant from '../features/plant/classes/Plant';
import { CreatePlantDto } from '../features/plant/dtos';
import usePlantsStore from '../features/plant/hooks/usePlantsStore';
import CustomButton from './CustomButton';
import DateTimePicker from './DateTimePicker';

interface PlantInputProps {
    visible: boolean;
    onClose: Function;
}

export default function PlantInput(props: PlantInputProps) {
    const { createPlant } = usePlantsStore();

    const [enteredPlantName, setEnteredPlantName] = useState('');
    const [waterCycle, setWaterCycle] = useState(0);
    const [fertilizeCycle, setFertilizeCycle] = useState(0);
    const [lastWateredDate, setLastWateredDate] = useState(new Date());
    const [lastFertilizedDate, setLastFertilizedDate] = useState(new Date());

    const nameInputHandler = (enteredPlantName: string) => {
        setEnteredPlantName(enteredPlantName);
    };

    const waterInputHandler = (waterCycle: string) => {
        setWaterCycle(parseInt(waterCycle));
    };

    const fertilizeInputHandler = (fertilizeCycle: string) => {
        setFertilizeCycle(parseInt(fertilizeCycle));
    };

    const getDateLastWatered = (date: Date) => {
        setLastWateredDate(date);
    }

    const getDateLastFertilized = (date: Date) => {
        setLastFertilizedDate(date);
    }

    const addPlantHandler = () => {
        if (enteredPlantName === '' || waterCycle === 0 || fertilizeCycle === 0) {
            Alert.alert(
                "We need some more information",
                "You need to input values for the name of your plant, its water and fertilize cycle.",
                [
                  { text: "OK", onPress: () => {} }
                ]
            );
            return;
        }
        const createPlantDto : CreatePlantDto = {
            name : enteredPlantName,
            waterCycle : waterCycle,
            fertilizeCycle : fertilizeCycle,
            lastWatered : lastWateredDate,
            lastFertilized: lastFertilizedDate,
        }
        createPlant(createPlantDto);
        props.onClose();
    }

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.container} >
                <View style={styles.header} >
                    <Text>Give some information about the plant:</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.image} >
                        <Text>Placeholder</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.tag}>Name:</Text>
                        <TextInput
                            onChangeText={nameInputHandler}
                            placeholder='name'
                            placeholderTextColor='#cccccc'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.tag}>Water rhythm:</Text>
                        <TextInput
                            onChangeText={waterInputHandler}
                            placeholder='days'
                            placeholderTextColor={'#cccccc'}
                            multiline={false}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.tag}>Last watered:</Text>
                        <DateTimePicker onShowDateTimePicker={getDateLastWatered} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.tag}>Fertilizer rhythm:</Text>
                        <TextInput
                            onChangeText={fertilizeInputHandler}
                            placeholder='weeks'
                            placeholderTextColor={'#cccccc'}
                            multiline={false}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.tag}>Last fertilized:</Text>
                        <DateTimePicker onShowDateTimePicker={getDateLastFertilized} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.tag}>Notes:</Text>
                        <TextInput
                            placeholder='notes'
                            placeholderTextColor={'#cccccc'}
                            multiline={true}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer} >
                    <CustomButton
                        title='cancel'
                        color='#cccccc'
                        onPress={props.onClose}
                    />
                    <CustomButton
                        title='add plant'
                        onPress={addPlantHandler}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#313552',
    },
    header: {

    },
    content: {
        
    },
    image: {
        backgroundColor: '#EEE6CE',
        width: '100%',
        height: 200
    },
    textInput: {
        height: 35,
        width: '70%',
        color: '#fff',
        backgroundColor: '#EEE6CE20'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tag: {
        color: '#ffffff'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});