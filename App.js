import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, FlatList, Button } from 'react-native';
import PlantItem from './components/PlantItem';
import PlantInput from './components/PlantInput';
import PlantInfo from './components/PlantInfo';
import CustomButton from './components/CustomButton';

export default function App() {
  const [plants, setPlants] = useState([]);
  const [addPlantModalIsVisible, setAddPlantModalIsVisible] = useState(false);
  const [plantInfoModalIsVisible, setPlantInfoModalIsVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});
  
  const addPlantHandler = (plantName, waterRhythm, lastWatered, fertilizerRhythm, lastFertilized, notes) => {
    setPlants(currentPlants => [
      ...currentPlants, 
      { 
        name: plantName, 
        id: Math.random().toString(),
        waterRhythm: waterRhythm,
        lastWatered: lastWatered,
        fertilizerRhythm: fertilizerRhythm,
        lastFertilized: lastFertilized.toString(),
        notes: notes
       },
    ]);
    closeAddPlantModal();
  };

  const waterPlantHandler = (id) => {
    const updatedPlants = plants.map(plant => {
      if (plant.id === id) {
        return { ...plant, lastWatered: new Date() };
      }
      return plant;
    });
    setPlants(updatedPlants);
  };

  const fertilizePlantHandler = (id) => {
    const updatedPlants = plants.map(plant => {
      if (plant.id === id) {
        return { ...plant, lastFertilized: new Date() };
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

  const openPlantInfoModal = (id, name, water, lastWatered, fertilizer, lastFertilized, notes) => {
    setSelectedPlant({id: id, name: name, waterRhythm: water, lastWatered: lastWatered, fertilizerRhythm: fertilizer, lastFertilized: lastFertilized, notes: notes});
    setPlantInfoModalIsVisible(true);
  }

  const closePlantInfoModal = () => {
    setPlantInfoModalIsVisible(false);
  }

  const test = (d) => {
  }


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
                      name={itemData.item.name}
                      id={itemData.item.id}
                      waterRhythm={itemData.item.waterRhythm}
                      lastWatered={itemData.item.lastWatered}
                      fertilizerRhythm={itemData.item.fertilizerRhythm}
                      lastFertilized={fertilizePlantHandler(itemData.item.id)}
                      notes={itemData.item.notes}
                      onWaterPlant={() => waterPlantHandler(itemData.item.id)}
                      onDeletePlant={deletePlantHandler}
                      onOpenPlantInfo={() => openPlantInfoModal(itemData.item.id, itemData.item.name, itemData.item.waterRhythm, itemData.item.lastWatered, itemData.item.fertilizerRhythm, itemData.item.lastFertilized, itemData.item.notes)}
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

      <PlantInfo 
        visible={plantInfoModalIsVisible}
        onOpenPlantInfo={openPlantInfoModal}
        onCancel={closePlantInfoModal}
        plant={selectedPlant}
      />
      
      <CustomButton title='add' onPress={openAddPlantModal} />
      
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
