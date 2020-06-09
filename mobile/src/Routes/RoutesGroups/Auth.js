import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewAppointment from './NewAppointment';

const AppTab = createBottomTabNavigator();

export default function Auth() {
  const screenOptions = (label, iconName) => ({
    tabBarLabel: label,
    tabBarIcon: ({ color, size }) => (
      <Icon name={iconName} color={color} size={size} />
    ),
  });

  return (
    <AppTab.Navigator
      screenOptions={{ resetOnBlur: true, tabBarVisible: true }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: { backgroundColor: '#8d41a8' },
      }}
    >
      <AppTab.Screen
        options={screenOptions('Schedules', 'event')}
        name="Dashboard"
        component={Dashboard}
      />
      <AppTab.Screen
        options={screenOptions('New Appointment', 'add-circle-outline')}
        name="NewAppointment"
        component={NewAppointment}
      />
      <AppTab.Screen
        options={screenOptions('My Profile', 'person')}
        name="Profile"
        component={Profile}
      />
    </AppTab.Navigator>
  );
}
