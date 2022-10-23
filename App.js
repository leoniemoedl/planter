import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, FlatList, Button } from 'react-native';
import PlantItem from './components/PlantItem';
import PlantInput from './components/PlantInput';

export default function App() {
  const [plants, setPlants] = useState([]);
  const [addPlantModalIsVisible, setAddPlantModalIsVisible] = useState(false);
  
  const addPlantHandler = (enteredPlantName) => {
    setPlants(currentPlants => [
      ...currentPlants, 
      { text: enteredPlantName, id: Math.random().toString() },
    ]);
    closeAddPlantModal();
  };

  const waterPlantHandler = (id) => {
    const updatedPlants = plants.map(plant => {
      if (plant.id === id) {
        return { ...plant, text: 'Hello world' };
      }
      return plant;
    });
    setPlants(updatedPlants);
  };

  const deletePlantHandler = (id) => {
    setPlants(currentPlants => {
      return currentPlants.filter((plant) => plant.id !== id);
    });
  };

  const openAddPlantModal = () => {
    setAddPlantModalIsVisible(true);
  };

  const closeAddPlantModal = () => {
    setAddPlantModalIsVisible(false);
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
                      waterRhythm={2}
                      fertilizerRhythm={4}
                      onWaterPlant={() => waterPlantHandler(itemData.item.id)}
                      onDeletePlant={deletePlantHandler}
                    />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>

      <PlantInput 
        visible={addPlantModalIsVisible} 
        onAddPlant={addPlantHandler} 
        onCancel={closeAddPlantModal}
      />
      <Button title='add' color='#B8405E' onPress={openAddPlantModal} />
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
