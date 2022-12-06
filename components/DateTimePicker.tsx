import { useState } from 'react';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CustomButton from './CustomButton';

interface dateTimePickerProps {
  onShowDateTimePicker: (date: Date) => void;
}

export default function DateTimePicker(props: dateTimePickerProps) {
    const showDateTimePicker = () => {
        let test = new Date();
        DateTimePickerAndroid.open({
            value: test,
            onChange,
            mode: 'date',
            is24Hour: true
        });
    }

    const onChange = (event : DateTimePickerEvent, selectedDate? : Date) => {
        let currentDate = selectedDate;
        if (!currentDate) return;
        props.onShowDateTimePicker(currentDate);
    }

    return (
      <CustomButton title='calendar' onPress={showDateTimePicker} />
    );
}