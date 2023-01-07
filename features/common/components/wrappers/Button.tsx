import { Button as _Button, ButtonProps } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default function Button(props: ButtonProps) {
    return (
        <_Button
            buttonStyle={styles.button}
            type="solid"
            {...props}
        >
            {props.children}
        </_Button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor : '#B8405E'
    }
})