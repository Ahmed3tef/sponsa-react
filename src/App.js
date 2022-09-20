import React from 'react';
import { useSelector } from 'react-redux';
import { Login, Home } from './pages';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {/* {!isLoggedIn && <Login />} */}
      <Home />
    </>
  );
};

export default App;
