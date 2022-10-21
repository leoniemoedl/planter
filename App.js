import { useState, useSyncExternalStore } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Button, Alert, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredPlantName, setEnteredPlantName] = useState('');
  const [plants, setPlants] = useState([]);

  const textInputHandler = (enteredText) => {
    setEnteredPlantName(enteredText);
  };

  const addPlantHandler = () => {
    setPlants(currentPlants => [
      ...currentPlants, 
      { text: enteredPlantName, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>

      <View style={styles.header}>
        <Text>Hey Leo, here is an overview of your planties :)</Text>
      </View>

      <View style={styles.plantContainer}>
        <FlatList 
          data={plants} 
          renderItem={itemData => {
            return (
              <View style={styles.plantItem} >
                <Text>{itemData.item.text}</Text>
                <View style={styles.plantBTNs}>
                  <Button title='edit' color='#B8405E' />
                  <Button title='delete' color='#B8405E' />
                </View>
              </View>
            );
          }} 
        />
      </View>

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
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EEE6CE',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plantContainer: {
    flex: 6,
  },
  plantBTNs: {
    flexDirection: 'row',
  },
  plantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 8,
    backgroundColor: '#2EB086',
  },
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
  textColorLight: {
    color: '#fff'
  }
});
