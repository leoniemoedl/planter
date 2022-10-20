import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Button, Alert, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredPlantName, setEnteredPlantName] = useState('');
  const [plants, setPlants] = useState([]);

  const textInputHandler = (enteredText) => {
    setEnteredPlantName(enteredText);
  };

  const addPlantHandler = () => {
    setPlants(currentPlants => [...currentPlants, enteredPlantName]);
    // Alert.alert(
    //   "Amazing!", "You added a plant named " + enteredPlantName + ".",
    //   [{text: "Cool"}] );
  };

  return (
    <View style={styles.display}>
      <View style={styles.header}>
        <Text>Hey Leo, here is an overview of your planties :)</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.plantContainer}>
        <ScrollView>
          {plants.map((plant) => (
            <View key={plant} style={styles.plantItem} >
              <Text>{plant}</Text>
            </View>))}
        </ScrollView>
      </View>
      <View style={styles.addPlantBox}>
        <TextInput 
          onChangeText={textInputHandler} 
          placeholder="plant name"
        />
        <Button 
          color="#30694B"
          title="add plant" 
          onPress={addPlantHandler} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 40 : 0,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    flex: 1
  },
  header: {
    flex: 1
  },
  plantContainer: {
    backgroundColor: "#25523B",
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    flex: 8,
  },
  plantItem: {
    backgroundColor: '#5AAB61',
    padding: 10,
    margin: 8
  },
  addPlantBox: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
});
