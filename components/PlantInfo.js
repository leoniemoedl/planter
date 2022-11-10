import { StyleSheet, View, Modal, Text } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantItem(props) {
    console.log("Plant Info: " + props.plant);

    return (
        <Modal visible={props.visible}>
            <View style={styles.container}>
                <View style={styles.btns}>
                    <CustomButton title='cancel' onPress={props.onCancel} />
                    <CustomButton title='edit' />
                </View>
                <View style={styles.img}></View>
                <Text>{props.plant.name}</Text>
                <Text>Water cycle: {props.plant.waterRhythm}</Text>
                <Text>Fertilizer cycle: {props.plant.fertilizerRhythm}</Text>
                <Text>Notes: {props.plant.notes}</Text>
                <CustomButton title='save' />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#313552',
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        backgroundColor: '#2EB086',
        width: '100%',
        height: 200
    }
});