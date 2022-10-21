import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

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
        <View style={styles.userInput}>
            <TextInput 
                onChangeText={textInputHandler} 
                placeholder='plant name'
                placeholderTextColor='#cccccc'
                style={styles.textInput}
            />
            <Button 
                color='#B8405E'
                title='add plant' 
                onPress={addPlantHandler} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    userInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 20,
        backgroundColor: '#313552'
      },
      textInput: {
        width: '70%',
        height: 35,
        color: '#fff'
      },
});