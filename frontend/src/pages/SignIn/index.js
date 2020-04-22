import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Yout password" />

        <button type="submit">Access</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
