import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import {
  Login,
  Home,
  Ads,
  Categories,
  SubCategories,
  Products,
  Reports,
  Orders,
} from './pages';
import Layout from './pages/Layout';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [currentTab, setCurrentTab] = useState('home');
  return (
    <>
      {/* {!isLoggedIn && <Login />} */}
      <Layout>
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main className='main p-5'>
          {currentTab === 'home' && <Home />}
          {/* {currentTab === 'profile' && <Profile />} */}
          {currentTab === 'ads' && <Ads />}
          {currentTab === 'categories' && <Categories />}
          {currentTab === 'subcategories' && <SubCategories />}
          {currentTab === 'products' && <Products />}
          {currentTab === 'reports' && <Reports />}
          {currentTab === 'orders' && <Orders />}
        </main>
      </Layout>
    </>
  );
};

export default App;
