import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';
import Routes from './Routes/routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  return <Routes signed={signed} />;
}
