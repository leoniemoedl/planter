import { StyleSheet, View, Modal, Text } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantItem(props) {
    const getDiffDays = (date) => {
        let pastDate = new Date(date);
        let currentDate = new Date();
        let diffTime = currentDate.getTime() - pastDate.getTime();
        let diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
        return diffDays;
    };

    const getDateFormatted = (dateString) => {
        let date = new Date(dateString);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
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
                <Text>
                    Needs water in: 
                    {props.plant.waterRhythm - getDiffDays(props.plant.lastWatered)} days
                    ({getDateFormatted(props.plant.lastWatered)})
                </Text>
                <Text>Fertilizer cycle: {props.plant.fertilizerRhythm}</Text>
                <Text>
                    Needs to be fertilized in: 
                    {props.plant.fertilizerRhythm - getDiffDays(props.plant.lastFertilized)} days
                    ({getDateFormatted(props.plant.lastFertilized)})
                </Text>
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