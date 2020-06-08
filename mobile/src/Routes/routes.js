import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Sign from './RoutesGroups/Sign';
import Auth from './RoutesGroups/Auth';

export default function Routes({ signed }) {
  return (
    <NavigationContainer>{signed ? <Auth /> : <Sign />}</NavigationContainer>
  );
}

Routes.propTypes = {
  signed: PropTypes.bool.isRequired,
};
