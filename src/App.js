import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar/Sidebar';
import { Login, Home } from './pages';
import Layout from './pages/Layout';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [currentTab, setCurrentTab] = useState('home');
  return (
    <>
      {/* {!isLoggedIn && <Login />} */}
      <Layout>
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 'home' && <Home />}
        {/* {currentTab === 'ads' && <Ads />} */}
      </Layout>
    </>
  );
};

export default App;
