import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Backgrounds';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter your email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Your secret password"
          />

          <SubmitButton onPress={() => {}}>Access</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Create your free account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
