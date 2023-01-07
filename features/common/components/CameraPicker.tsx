import { View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from "react";
import CustomButton from "../../plant/components/CustomButton";
import { Icon } from "@rneui/themed";

interface CameraPickerProps {
    onTakePhoto: (img: string) => void;
}

export default function CameraPicker(props: CameraPickerProps) {
    const [cameraActive, setCameraActive] = useState(false);
    const [imageBase64, setImageBase64] = useState('');

    useEffect(() => props.onTakePhoto(imageBase64)); // <-- here put the parameter to listen

    const takePhoto = () => {
        setCameraActive(true);
    }

    return (
        <View>
            {(imageBase64 === '') ?
                (!cameraActive) ?
                    <View style={{ ...styles.image, backgroundColor: '#EEE6CE' }} >
                        <CustomButton title='take image' onPress={takePhoto} />
                    </View>

                    :
                    <View style={styles.image}>
                        <Cam
                            onTakePhoto={setImageBase64}
                            onClose={() => { setCameraActive(false); }} />
                    </View>
                :
                (!cameraActive) ?
                    <View>
                        <Image style={styles.image} source={{ uri: 'data:image/jpg;base64,' + imageBase64 }} />
                        <TouchableOpacity onPress={takePhoto} style={styles.btn2}>
                            <Icon
                                name={'camera'}
                                type='font-awesome'
                                color={'#ffffff'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.image}>
                        <Cam
                            onTakePhoto={setImageBase64}
                            onClose={() => { setCameraActive(false); }} />
                    </View>

            }
        </View>
    );
}


interface CamProps {
    onTakePhoto: (imgBase64: string) => void;
    onClose: () => void;
}

function Cam(props: CamProps) {
    const [hasPermission, setHasPermission] = useState(false);
    const [cameraRef, setCameraRef] = useState<null | Camera>(null)
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission) {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }

    const takePhoto = async () => {
        const picture = await cameraRef?.takePictureAsync({ base64: true });
        // console.log('..................................');
        // console.log(picture?.uri);
        if (picture?.base64) {
            props.onTakePhoto(picture.base64);
            props.onClose();
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
    },
    image: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn2: {
        backgroundColor: '#cccccc',
        opacity: 0.5,
        padding: 15,
        borderRadius: 50,
        position: 'absolute',
        alignSelf: 'center',
        top: '40%' // TODO: calculate true vertical center
    },
});