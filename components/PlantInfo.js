import { StyleSheet, View, Modal, Text } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantItem(props) {
    const getDiffDays = (date) => {
        console.log("test     " + date);

        let pastDate = new Date(date);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let currentDate = new Date(new Date().getDate() + " " + months[new Date().getMonth()] + " " + new Date().getFullYear());
        let diffTime = currentDate.getTime() - pastDate.getTime();
        let diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

        return diffDays;
    };

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
                <Text>Needs water in: {getDiffDays(props.plant.lastWatered)} days</Text>
                <Text>Fertilizer cycle: {props.plant.fertilizerRhythm}</Text>
                <Text>Needs to be fertilized in: {getDiffDays(props.plant.lastFertilized)} days</Text>
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