import { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, Text } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantInput(props) {
    const getDate = () => {
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let currentDate = new Date(new Date().getDate() + ' ' + months[new Date().getMonth()] + ' ' + new Date().getFullYear());
        console.log("day: " + new Date().getDate());
        console.log("month: " + new Date().getMonth());
        console.log("year: " + new Date().getFullYear());
        return currentDate.toString();
        // return '02 Nov 2022';
    }

    const [name, setName] = useState('');
    const [waterRhythm, setWaterRhythm] = useState('');
    const [lastWatered, setLastWatered] = useState(getDate());
    const [fertilizerRhythm, setFertilizerRhythm] = useState('');
    const [lastFertilized, setLastFertilized] = useState(getDate());
    const [notes, setNotes] = useState('');

    const inputNameHandler = (name) => {
        setName(name);
    };

    const inputWaterRhythmHandler = (waterRhythm) => {
        setWaterRhythm(waterRhythm);
    };

    const inputLastWateredHandler = (lastWatered) => {
        setLastWatered(lastWatered);
    };
    
    const inputFertilizerRhythmHandler = (fertilizerRhythm) => {
        setFertilizerRhythm(fertilizerRhythm);
    };

    const inputLastFertilizedHandler = (lastFertilized) => {
        setLastFertilized(lastFertilized);
    };

    const inpuNotesHandler = (notes) => {
        setNotes(notes);
    };
    
    const addPlantHandler = () => {
        if (name === '') {
            console.log('todo: no name for plant');
        }
        props.onAddPlant(name, waterRhythm, lastWatered, fertilizerRhythm, lastFertilized, notes);
        setName('');
        setWaterRhythm('');
        setLastWatered('');
        setFertilizerRhythm('');
        setLastFertilized('');
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

                    <Text>Last watered:</Text>
                    <TextInput
                        onChangeText={inputLastWateredHandler}
                        placeholder={getDate()}
                        placeholderTextColor={'#cccccc'}
                        style={styles.textInput}
                    />

                    <TextInput
                        onChangeText={inputFertilizerRhythmHandler}
                        placeholder='fertilizer rhythm'
                        placeholderTextColor={'#cccccc'}
                        style={styles.textInput}
                    />

                    <Text>Last fertilized:</Text>
                    <TextInput
                        onChangeText={inputLastFertilizedHandler}
                        placeholder={getDate()}
                        placeholderTextColor={'#cccccc'}
                        style={styles.textInput}
                    />

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
    content: {

    },
    image: {
        backgroundColor: '#EEE6CE',
        width: '100%',
        height: 200
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