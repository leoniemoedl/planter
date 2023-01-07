import { Button } from '@rneui/themed';
import { List } from 'lodash';
import React from 'react';
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import DialogLayout from '../../common/components/DialogLayout';
import usePlantsStore from '../hooks/usePlantsStore';
import CustomButton from './CustomButton';


interface PlantDeleteDialogProps {
    visible: boolean;
    id: string;
    cancel: () => void;
}

export default function PlantDeleteDialog(props: PlantDeleteDialogProps) {

    const { deletePlantById } = usePlantsStore();
    const deleteReasons : string[] = ["i killed this plant :(", "insects killed this plant :(("];

    return (
        <DialogLayout
            visible={props.visible}
            text="why do you want to delete this plant?"
            title="deletion"
            iconColor='white'
            indicatorBackgroundColor='orange'
            iconName='bomb'
        >
            <View>
                <View style={styles.deleteOptionsContainer}>
                    <SelectDropdown 
                        data={deleteReasons}
                        onSelect={(selectedItem, index) => {
                            //console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        onChangeSearchInputText={() => {}}
                        rowTextStyle={styles.dropdownRow}
                        buttonTextStyle={styles.dropdownRow}
                        buttonStyle={styles.selectButtonStyle}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="CANCEL"
                        onPress={props.cancel}
                        type="clear"
                        size='sm'
                    />
                    <CustomButton
                        title="OK"
                        onPress={(event: GestureResponderEvent) => deletePlantById(props.id)}
                        type="clear"
                        size='sm'
                    />
                </View>
            </View>
        </DialogLayout>
    )
}

const styles = StyleSheet.create({
    deleteOptionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 5,
        fontsize: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingTop: 25
    },
    dropdownRow: {
        fontSize: 16
    },
    selectButtonStyle: {
        width: "100%"
    }
});