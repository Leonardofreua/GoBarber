import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectProvider from '~/pages/NewAppointment/SelectProvider';
import SelectDateTime from '~/pages/NewAppointment/SelectDateTime';
import ConfirmAppointment from '~/pages/NewAppointment/ConfirmAppointment';

const AppStack = createStackNavigator();

export default function NewAppointment() {
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
