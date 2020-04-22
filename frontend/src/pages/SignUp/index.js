import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Create account</button>
        <Link to="/">I already have login</Link>
      </form>
    </>
  );
}
