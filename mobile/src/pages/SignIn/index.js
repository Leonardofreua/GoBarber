import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Backgrounds';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Sign in</Text>

      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="digite seu nome"
      />

      <Button>Entrar</Button>
    </Background>
  );
}
