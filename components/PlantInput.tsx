import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Text } from 'react-native';
import Plant from '../features/plant/classes/Plant';
import usePlantsStore from '../features/plant/hooks/usePlantsStore';
import CustomButton from './CustomButton';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface PlantInputProps {
    visible: boolean;
    onClose: Function;
}

export default function PlantInput(props: PlantInputProps) {
    const { addPlant } = usePlantsStore();

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

    const onChangeLastWateredDate = (event : DateTimePickerEvent, selectedDate? : Date) => { // todo: event typ
        let currentDate = selectedDate;
        if (!currentDate) return;
        setLastWateredDate(currentDate);
    }

    const onChangeLastFertilizeDate = (event : DateTimePickerEvent, selectedDate? : Date) => { // todo: event typ
        let currentDate = selectedDate;
        if (!currentDate) return;
        setLastFertilizedDate(currentDate);
    }

    const showLastWateredDatePicker = (option : string) => {
        DateTimePickerAndroid.open({
            value: lastWateredDate,
            onChange: option === 'water' ? onChangeLastWateredDate : onChangeLastFertilizeDate, // todo: kann man das besser machen?
            mode: 'date',
            is24Hour: true
        });
    }

    const addPlantHandler = () => {
        let plant : Plant = new Plant({
            id : Math.random().toString(),
            name : enteredPlantName,
            waterCycle : waterCycle,
            fertilizeCycle : fertilizeCycle,
            lastWatered : lastWateredDate,
            lastFertilized: new Date()
        });
        addPlant(plant);
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
                        <CustomButton title='calendar' onPress={() => showLastWateredDatePicker('water')} />
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
                        <CustomButton title='calendar' onPress={() => showLastWateredDatePicker('fertilizer')} />
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