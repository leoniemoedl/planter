import { StyleSheet, View, Text, Button, Pressable } from 'react-native';

export default function PlantItem(props) {
    return (
        <Pressable>
            <View style={styles.plantItem} >
                <Text>{props.text}</Text>
                <View style={styles.plantBTNs}>
                    <Button title='edit' color='#B8405E' />
                    <Button title='delete' color='#B8405E' onPress={props.onDeletePlant.bind(this, props.id)} />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    plantBTNs: {
        flexDirection: 'row',
      },
      plantItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        margin: 8,
        backgroundColor: '#2EB086',
      },
});