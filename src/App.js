import React, { useEffect, useState } from 'react';
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
  Reviews,
} from './pages';

import Layout from './pages/Layout';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [currentTab, setCurrentTab] = useState('home');
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('token', token);
    }
  }, [isLoggedIn, token]);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <Layout>
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <main className='main p-5'>
            {/* <Routes>
              <Route path='/home' index element={<Home />} />
              <Route path='/ads' element={<Ads />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/subcategories' element={<SubCategories />} />
              <Route path='/products' element={<Products />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/reviews' element={<Reviews />} />
            </Routes> */}
            {currentTab === 'home' && <Home />}

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
