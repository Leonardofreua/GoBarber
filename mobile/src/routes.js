import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <NavigationContainer>
      <SignIn />
      <SignUp />
    </NavigationContainer>
  );
}
