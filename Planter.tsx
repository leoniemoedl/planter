import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, FlatList, Button } from 'react-native';
import PlantItem from './components/PlantItem';
import PlantInput from './components/PlantInput';
import CustomButton from './components/CustomButton';
import { Plant } from './features/plant/types';


export default function Planter() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [addPlantModalIsVisible, setAddPlantModalIsVisible] = useState(false);

  const addPlantHandler = (plantDto : Plant) => {
    setPlants([...plants, plantDto]);
    // setPlants(currentPlants =>   // in this case: plants = setPlants(plants)
    //   [
    //     ...currentPlants,
    //     { text: enteredPlantName, id: Math.random().toString() },
    //   ]
    // );
    closeAddPlantModal();
  };

  const waterPlantHandler = (id: string) => {
    const updatedPlants = plants.map(plant => {
      if (plant.id === id) {
        return { ...plant, name: 'yay gegossen' };
      }
      return plant;
    });
    setPlants(updatedPlants);
  };

  const deletePlantHandler = (id: string) => {
    setPlants(plants.filter((plant) => plant.id !== id));
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
          renderItem={({index, item}) => {
            return <PlantItem
              text={item.name}
              id={item.id}
              waterRhythm={item.waterCycle}
              fertilizerRhythm={item.fertilizeCycle}
              onWaterPlant={() => waterPlantHandler(item.id)}
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
      {/* <Button title='add' color='#B8405E' onPress={openAddPlantModal} /> */}
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
