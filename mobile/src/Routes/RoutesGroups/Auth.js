import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewAppointment from './NewAppointment';

const AppTab = createBottomTabNavigator();

export default function Auth() {
  return (
    <AppTab.Navigator
      screenOptions={{ resetOnBlur: true }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: { backgroundColor: '#8d41a8' },
      }}
    >
      <AppTab.Screen name="Dashboard" component={Dashboard} />
      <AppTab.Screen name="NewAppointment" component={NewAppointment} />
      <AppTab.Screen name="Profile" component={Profile} />
    </AppTab.Navigator>
  );
}
