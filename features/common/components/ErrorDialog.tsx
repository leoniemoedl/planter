import { Button } from '@rneui/themed';
import { StyleSheet } from "react-native";
import DialogLayout from './DialogLayout';

interface ErrorDialogProps {
    text: string;
    visible: boolean;
    confirmError: () => void;
}

export default function ErrorDialog({ text, visible, confirmError }: ErrorDialogProps) {
    return (
        <DialogLayout
            visible={visible}
            text={text}
            title="Error!"
            iconColor='white'
            indicatorBackgroundColor='red'
            iconName='exclamation'
        >
            <Button
                buttonStyle={styles.button}
                title="OK"
                onPress={confirmError}
                type="clear"
                size='sm'
            />
        </DialogLayout>
    )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
    },
});