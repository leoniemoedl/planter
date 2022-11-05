import { StyleSheet, Button, View } from 'react-native';

export default function CustomButton(props : any) {
    const col = props.color ? props.color : '#B8405E'

    return(
        <View style={styles.container}>
            <Button 
                title={props.title} 
                color={col}
                onPress={props.onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100
    }
});