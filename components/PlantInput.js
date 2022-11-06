import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Text } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantInput(props) {
    const [name, setName] = useState('');
    const [waterRhythm, setWaterRhythm] = useState('');
    const [fertilizerRhythm, setFertilizerRhythm] = useState('');
    const [notes, setNotes] = useState('');
    
    const inputNameHandler = (name) => {
        setName(name);
    };

    const inputWaterRhythmHandler = (waterRhythm) => {
        setWaterRhythm(waterRhythm);
    };

    const inputFertilizerRhythmHandler = (fertilizerRhythm) => {
        setFertilizerRhythm(fertilizerRhythm);
    };

    const inpuNotesHandler = (notes) => {
        setNotes(notes);
    };
    
    const addPlantHandler = () => {
        props.onAddPlant(name);
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

                    <TextInput
                        onChangeText={inputWaterRhythmHandler}
                        placeholder='fertilizer rhythm'
                        placeholderTextColor={'#cccccc'}
                        style={styles.textInput}
                    />

                    <TextInput 
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