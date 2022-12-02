import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, FlatList, Button } from 'react-native';
import PlantItem from './components/PlantItem';
import PlantInput from './components/PlantInput';
import CustomButton from './components/CustomButton';
// import { Plant } from './features/plant/types';
import Plant from './features/plant/classes/Plant';
import plantListState from './features/plant/atoms/PlantAtom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import usePlants from './features/plant/hooks/usePlants';


export default function Planter() {
  const [addPlantModalIsVisible, setAddPlantModalIsVisible] = useState(false);

  const { plantList, addPlant, updatePlants, deletePlantById } = usePlants();

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
          data={plantList}
          renderItem={(itemData) => {
            return <PlantItem plantId={itemData.item.id} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>

      <PlantInput
        visible={addPlantModalIsVisible}
        onClose={closeAddPlantModal}
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
