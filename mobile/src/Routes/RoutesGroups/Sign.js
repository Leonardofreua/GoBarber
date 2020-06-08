import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const AppStack = createStackNavigator();

export default function SignRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        title: '',
        headerTransparent: true,
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#FFF',
      }}
    >
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />
    </AppStack.Navigator>
  );
}
