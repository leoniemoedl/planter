import { StyleSheet, View, Text, Pressable } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantItem(props) {
    const getDateFormatted = (dateString) => {
        let date = new Date(dateString);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };

    return (
        <Pressable onPress={props.onOpenPlantInfo}>
            <View style={styles.plantItem} >
                <Text>{props.name}</Text>
                <View style={styles.userInteraction} >
                    <View style={styles.col} >
                        <Text>Needs water in {getDateFormatted(props.lastWatered)} days</Text> 
                        <Text>Water rhythm: {props.waterRhythm} days</Text> 
                        <CustomButton title='give water' onPress={props.onWaterPlant} />
                    </View>
                    <View style={styles.col} >
                        <Text>Needs fertilizer in {props.lastFertilized} days</Text> 
                        <Text>Fertilizer rhythm: {props.fertilizerRhythm} weeks</Text>
                        <CustomButton title='fertilize' />
                    </View>
                </View>
                
                {/* <View style={styles.plantBTNs}>
                    <Button title='edit' color='#B8405E' />
                    <Button title='delete' color='#B8405E' onPress={props.onDeletePlant.bind(this, props.id)} />
                </View> */}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    plantItem: {
        justifyContent: 'space-between',
        padding: 10,
        margin: 8,
        backgroundColor: '#2EB086',
    },
    userInteraction: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    col: {
    },
    plantBTNs: {
        flexDirection: 'row',
    },
      
});