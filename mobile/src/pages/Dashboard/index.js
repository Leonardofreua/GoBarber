import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from '@react-navigation/compat';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

function Dashboard({ navigation, isFocused }) {
  const [appointments, setAppointments] = useState([]);

  navigation.setOptions({
    tabBarLabel: 'Schedule',
    tabBarIcon: () => <Icon name="event" size={20} color="#FFF" />,
  });

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancelAppointment(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, canceled_at: response.data.canceled_at }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Schedules</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onCancel={() => handleCancelAppointment(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Dashboard);
