import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Text } from 'react-native';

export default function PlantInput(props) {
    const [enteredPlantName, setEnteredPlantName] = useState('');
    
    const textInputHandler = (enteredPlantName) => {
      setEnteredPlantName(enteredPlantName);
    };
    
    const addPlantHandler = () => {
        props.onAddPlant(enteredPlantName);
        // setEnteredPlantName('');
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
                        onChangeText={textInputHandler} 
                        placeholder='name'
                        placeholderTextColor='#cccccc'
                        style={styles.textInput}
                    />
                    <Text>Water rhythm:</Text>
                    <Text>Fertilizer rhythm:</Text>
                    <TextInput 
                        placeholder='notes'
                        placeholderTextColor={'#cccccc'}
                        multiline={true}
                        style={styles.textInput}
                    />
                    <View style={styles.buttonContainer} >
                        <Button 
                            color='#B8405E'
                            title='add plant' 
                            onPress={addPlantHandler} 
                        />
                        <Button 
                            color='#B8405E'
                            title='cancel' 
                            onPress={props.onCancel}
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