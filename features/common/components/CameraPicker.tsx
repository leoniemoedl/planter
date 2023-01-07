import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from "react";
import CustomButton from "../../plant/components/CustomButton";
import { Icon } from "@rneui/themed";

interface CameraPickerProps {
    onTakePhoto: (imgBase64: string) => void;
    onClose: () => void;
}

export default function CamerPicker(props: CameraPickerProps) {
    const [hasPermission, setHasPermission] = useState(false);
    const [cameraRef, setCameraRef] = useState<null | Camera>(null)
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePhoto = async () => {
        const picture = await cameraRef?.takePictureAsync({ base64: true });
        console.log('..................................');
        console.log(picture?.uri);
        if (picture?.base64) {
            props.onTakePhoto(picture.base64);
        }
    }

    const flipCamera = () => {
        console.log('todo');
        // das funktioniert nicht
        // if (CameraType.back) {
        //     setType(CameraType.front);
        // } else {
        //     setType(CameraType.back);
        // }
    }

    const cancel = () => {
        props.onClose();
    }

    return (
        <Camera style={styles.camera} type={type} ref={ref => {
            setCameraRef(ref);
        }}>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={cancel} style={styles.btn}>
                    <Icon
                        name={'times'}
                        type='font-awesome'
                        color={'#ffffff'}
                        size={20}
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto} style={styles.btn}>
                    <Icon
                        name={'camera'}
                        type='font-awesome'
                        color={'#ffffff'}
                        size={20}
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={flipCamera} style={styles.btn}>
                    <Icon
                        name={'refresh'}
                        type='font-awesome'
                        color={'#ffffff'}
                        size={20}
                        />
                </TouchableOpacity>
            </View>
        </Camera>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#B8405E',
        padding: 15,
        borderRadius: 50
    }
});