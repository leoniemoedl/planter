import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, Text, Button } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantInput(props) {
    const [name, setName] = useState('');
    const [waterRhythm, setWaterRhythm] = useState();
    const [fertilizerRhythm, setFertilizerRhythm] = useState('');
    const [notes, setNotes] = useState('');
    const [fertilizeDate, setFertilizeDate] = useState(new Date());
    const [wateredDate, setWateredDate] = useState(new Date());

    const onChangeWateredDate = (event, selectedDate) => {
        let currentDate = selectedDate;
        setWateredDate(currentDate);
    }

    const onChangeFertilizedDate = (event, selectedDate) => {
        let currentDate = selectedDate;
        setFertilizeDate(currentDate);
    }

    const showDateWateredPicker = () => {
        DateTimePickerAndroid.open({
            value: wateredDate,
            onChange: onChangeWateredDate,
            mode: 'date',
            is24Hour: true
        });
    }

    const showDateFertilizedPicker = () => {
        DateTimePickerAndroid.open({
            value: fertilizeDate,
            onChange: onChangeFertilizedDate,
            mode: 'date',
            is24Hour: true
        });
    }

    const inputNameHandler = (name) => {
        setName(name);
    };

    const inputWaterRhythmHandler = (waterRhythm) => {
        setWaterRhythm(parseInt(waterRhythm, 10));
    };
    
    const inputFertilizerRhythmHandler = (fertilizerRhythm) => {
        setFertilizerRhythm(parseInt(fertilizerRhythm, 10));
    };

    const inpuNotesHandler = (notes) => {
        setNotes(notes);
    };
    
    const addPlantHandler = () => {
        if (name === '') {
            console.log('todo: no name for plant');
        }
        props.onAddPlant(
                name, 
                waterRhythm, 
                wateredDate, 
                fertilizerRhythm, 
                fertilizeDate, 
                notes
        );
        setName('');
    }

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.container} >

                <Text>Give some information about the plant:</Text>

                <View style={styles.content} >

                    <View style={styles.image} >
                        <Text>placeholder image</Text>
                    </View>

                    <TextInput 
                        onChangeText={inputNameHandler} 
                        placeholder='name'
                        placeholderTextColor='#cccccc'
                        style={styles.textInput}
                    />

                    <TextInput
                        onChangeText={inputWaterRhythmHandler}
                        placeholder='water rhythm'
                        placeholderTextColor={'#cccccc'}
                        style={styles.textInput}
                    />

                    <View style={styles.dateSelection} >
                        <Text>Last watered: {wateredDate.getDate() + '/' + (wateredDate.getMonth() + 1) + '/' + wateredDate.getFullYear()}</Text>
                        <CustomButton
                            title='Calendar'
                            onPress={() => showDateWateredPicker()}
                        />
                    </View>

                    <TextInput
                        onChangeText={inputFertilizerRhythmHandler}
                        placeholder='fertilizer rhythm'
                        placeholderTextColor={'#cccccc'}
                        style={styles.textInput}
                    />

                    <View style={styles.dateSelection} >
                        <Text>Last fertilized: {fertilizeDate.getDate() + '/' + (fertilizeDate.getMonth() + 1) + '/' + fertilizeDate.getFullYear()}</Text>
                        <CustomButton
                            title='Calendar'
                            onPress={() => showDateFertilizedPicker()}
                            />
                    </View>

                    <TextInput 
                        onChangeText={inpuNotesHandler}
                        placeholder='notes'
                        placeholderTextColor={'#cccccc'}
                        multiline={true}
                        style={styles.textInput}
                    />
                    <View style={styles.buttonContainer} >
                        <CustomButton 
                            title='cancel'
                            color='#cccccc'
                            onPress={props.onCancel}
                        />
                        <CustomButton 
                            title='add plant' 
                            onPress={addPlantHandler} 
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#313552',
    },
    image: {
        backgroundColor: '#EEE6CE',
        width: '100%',
        height: 200
    },
    dateSelection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        height: 35,
        color: '#fff',
        backgroundColor: '#EEE6CE20'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});