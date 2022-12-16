import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from "react-native";
import DialogLayout from './DialogLayout';

interface ConfirmDialogProps {
    text: string;
    title?: string;
    visible: boolean;
    confirm: () => void;
    cancel: () => void;
}

export default function ConfirmDialog({ text, visible, title, confirm, cancel }: ConfirmDialogProps) {
    return (
        <DialogLayout
            visible={visible}
            text={text}
            title={title}
            iconColor='white'
            indicatorBackgroundColor='orange'
            iconName='bomb'
        >

            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={styles.button}
                    title="CANCEL"
                    onPress={cancel}
                    type="clear"
                    size='sm'
                />
                <Button
                    buttonStyle={styles.button}
                    title="OK"
                    onPress={confirm}
                    type="clear"
                    size='sm'
                />
            </View>
        </DialogLayout>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    button: {
        marginBottom: 10,
    },
});