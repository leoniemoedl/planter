import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import PlantItem from './components/PlantItem';
import PlantInput from './components/PlantInput';

export default function App() {
  const [plants, setPlants] = useState([]);
  
  const addPlantHandler = (enteredPlantName) => {
    setPlants(currentPlants => [
      ...currentPlants, 
      { text: enteredPlantName, id: Math.random().toString() },
    ]);
  };

  const deletePlantHandler = (id) => {
    setPlants(currentPlants => {
      return currentPlants.filter((plant) => plant.id !== id);
    });
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
            return <PlantItem 
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeletePlant={deletePlantHandler} 
                    />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>

      <PlantInput onAddPlant={addPlantHandler} />
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
});
