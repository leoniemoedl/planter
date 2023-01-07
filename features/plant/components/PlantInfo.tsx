import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image, ImageBackground, Modal, Platform} from 'react-native';
import usePlant from '../hooks/usePlant';
import usePlantsStore from '../hooks/usePlantsStore';
import CustomButton from './CustomButton';
import PlantDeleteDialog from './PlantDeleteDialog';

interface PlantInfoProps {
    plantId: string;
    visible: boolean;
    onClose: Function;
}

export default function PlantInfo(props: PlantInfoProps) {

    const { waterPlantById, fertilizePlantById } = usePlantsStore();
    const {plant} = usePlant(props.plantId);
    const [plantDeleteDialogVisible, setPlantDeleteDialogVisible] = useState(false);

    if (!plant) return <View />

    const waterHandler = () => {
        waterPlantById(plant.id);
    }

    const fertilizeHandler = () => {
        fertilizePlantById(plant.id);
    }

    const openPlantDeleteDialog = () => {
        setPlantDeleteDialogVisible(true);
    }

    const closePlantDeleteDialog = () => {
        setPlantDeleteDialogVisible(false);
    }

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.plantInfo} >
                    <Image style={styles.img} source={require('../../../assets/plant-images/pilea.jpg')} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{plant.name}</Text>
                        <Text style={styles.info}>Needs water in {plant.needsToBeWateredIn()} days</Text>
                        <Text style={styles.info}>Water rhythm: {plant.waterCycle} days</Text>
                        <CustomButton title='give water' onPress={waterHandler} />
                        <Text style={styles.info}>Needs fertilizer in {plant.needsToBeFertilazedIn()} days</Text>
                        <Text style={styles.info}>Fertilizer rhythm: {plant.fertilizeCycle} days</Text>
                        <CustomButton title='fertilize' onPress={fertilizeHandler} />
                    </View>
                </View>
            <View style={styles.buttonContainer} >
                <CustomButton
                    title='cancel'
                    color='#cccccc'
                    onPress={props.onClose}
                />
                <CustomButton
                    title='edit plant'
                    onPress={() => {}}
                />
                <CustomButton
                    title='delete plant'
                    onPress={openPlantDeleteDialog}
                />
            </View>
            <View>
                <PlantDeleteDialog visible={plantDeleteDialogVisible} id={plant.id} cancel={closePlantDeleteDialog}
                />
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    plantInfo: {
        flex: 1,
        backgroundColor: '#2EB086',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    img: {
        height: 160,
        width: '35%'
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        paddingTop: 10
    },
    info: {
        width: '85%',
        flexDirection: 'column',
        fontSize: 16,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});