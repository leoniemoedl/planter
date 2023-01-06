import { useState } from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import PlantItem from './features/plant/components/PlantItem';
import PlantInput from './features/plant/components/PlantInput';
import CustomButton from './features/plant/components/CustomButton';
import usePlantsStore from './features/plant/hooks/usePlantsStore';


export default function Planter() {
  const [addPlantModalIsVisible, setAddPlantModalIsVisible] = useState(false);

  const { plants } = usePlantsStore();

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
