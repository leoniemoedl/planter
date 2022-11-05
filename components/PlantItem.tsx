import { StyleSheet, View, Text, Pressable } from 'react-native';
import CustomButton from './CustomButton';

export default function PlantItem(props : any) {
    const test = () => {
        console.log(props.text);
    }

    return (
        <Pressable>
            <View style={styles.plantItem} >
                <Text>{props.text}</Text>
                <View style={styles.userInteraction} >
                    <View style={styles.col} >
                        <Text>Water rhythm: {props.waterRhythm} days</Text> 
                        <CustomButton title='give water' onPress={props.onWaterPlant} />
                    </View>
                    <View style={styles.col} >
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