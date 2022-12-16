import { Icon, Overlay } from '@rneui/themed';
import { StyleSheet, Text, View } from "react-native";

interface DialogLayoutProps {
    title?: string;
    visible: boolean;
    text: string;
    iconName: string;
    indicatorBackgroundColor: string;
    iconColor: string;
    children: JSX.Element,
}

export default function DialogLayout({ title, visible, text, iconName, iconColor, indicatorBackgroundColor, children }: DialogLayoutProps) {
    return (
        <Overlay overlayStyle={styles.overlay} isVisible={visible}>
            <View style={{ ...styles.indicator, backgroundColor: indicatorBackgroundColor }} >
                <Icon
                    name={iconName}
                    type='font-awesome'
                    color={indicatorBackgroundColor}
                    size={25}
                    iconStyle={{ color: iconColor }}
                />
            </View>
            <View style={styles.container}>
                {title && <Text style={styles.title}>{title}</Text>}
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
            {children}
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        padding: 0,
        width: 240,
        paddingHorizontal: 10,
    },
    indicator: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 'auto',
        marginTop: -25,
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 60,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
        marginBottom: 10,
    },
    container: {
        marginTop: 15,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 20,
    },
});