import { SliderProps } from "@rneui/base";
import { Slider as _Slider } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Slider(props: SliderProps) {
    const maxValue = 20;
    const minValue = 0;
    const step = 1;
    const [value, setValue] = useState(minValue);

    return (
        <_Slider            
            value={value}
            minimumValue={minValue}
            maximumValue={maxValue}
            step={step}
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    thumb : {
        width: 15,
        height: 15,
        backgroundColor: 'purple'
    },
    track : {
        width: 50,
        backgroundColor: 'green',
        height: 3,
    }
})