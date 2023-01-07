import { StyleSheet } from 'react-native';
import { TextProps, Text as _Text } from "@rneui/base";

export default function Text(props: TextProps) {

    return (
        <_Text
            style={[styles.text, props.style]}
            {...props}
        >
            {props.children}
        </_Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#555'
    }
})