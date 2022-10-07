import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
  Profile,
} from './pages';

import Layout from './pages/Layout';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [currentTab, setCurrentTab] = useState('home');
  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <Layout>
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className='main p-5'>
            {/* <Routes>
            <Route />
          </Routes> */}
            {currentTab === 'home' && <Home />}
            {/* {currentTab === 'profile' && <Profile />} */}
            {currentTab === 'ads' && <Ads />}
            {currentTab === 'profile' && <Profile />}
            {currentTab === 'categories' && <Categories />}
            {currentTab === 'subcategories' && <SubCategories />}
            {currentTab === 'products' && <Products />}
            {currentTab === 'reports' && <Reports />}
            {currentTab === 'orders' && <Orders />}
          </main>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
          />
        </Layout>
      )}
    </>
  );
};

export default App;
