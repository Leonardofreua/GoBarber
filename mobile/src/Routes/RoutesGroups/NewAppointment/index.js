import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/NewAppointment/SelectProvider';
import SelectDateTime from '~/pages/NewAppointment/SelectDateTime';
import ConfirmAppointment from '~/pages/NewAppointment/ConfirmAppointment';

const AppStack = createStackNavigator();

export default function NewAppointment({ navigation }) {
  navigation.setOptions({
    tabBarLabel: 'New Appointment',
    tabBarIcon: () => (
      <Icon
        name="add-circle-outline"
        size={20}
        color="rgba(255, 255, 255, 0.6)"
      />
    ),
  });

  return (
    <AppStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <AppStack.Screen name="SelectProvider" component={SelectProvider} />
      <AppStack.Screen name="SelectDateTime" component={SelectDateTime} />
      <AppStack.Screen
        name="ConfirmAppointment"
        component={ConfirmAppointment}
      />
    </AppStack.Navigator>
  );
}

NewAppointment.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
};
