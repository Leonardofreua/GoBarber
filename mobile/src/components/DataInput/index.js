import React, { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [show, setShow] = useState(false);

  const dateFormatted = useMemo(() => format(date, 'dd/MMMM/yyyy'), [date]);

  const setDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');
    onChange(currentDate);
  };

  function handleOpenPicker() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <Container>
      <DateButton onPress={() => handleOpenPicker()}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {show && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          minimumDate={new Date()}
          onChange={setDate}
        />
      )}
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
