import React, { useRef, useEffect, useState } from 'react';
import './Login.css';
import logoImg from '../assets/sponsaLogo.png';
import passIcon from '../assets/Password.svg';
import userIcon from '../assets/User.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/reducers/auth';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { unwrapResult } from '@reduxjs/toolkit';

const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const rememberMeInputRef = useRef();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const rememberMe = rememberMeInputRef.current.checked;
    dispatch(loginUser({ email, password }))
      .then(unwrapResult)
      .then(promiseResponse => {
        console.log(promiseResponse);
        if (promiseResponse.status === 1) {
          if (rememberMe) {
            localStorage.setItem('token', promiseResponse.token.token);
          }
        }
      });
  };

  return (
    <div className='login'>
      <section className='login__form'>
        <div className='login__logo'>
          <img src={logoImg} alt='logo ' />
        </div>
        <form onSubmit={submitHandler}>
          <div className='login__control'>
            <label htmlFor='email'>
              <img src={userIcon} alt='user' />
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email'
              required
              ref={emailInputRef}
            />
          </div>
          <div className='login__control mb-5'>
            <label htmlFor='password'>
              <img src={passIcon} alt='password logo' />
            </label>
            <input
              type={!showPassword ? 'password' : 'text'}
              id='password'
              placeholder='Password'
              required
              ref={passwordInputRef}
            />
            <div
              className='pass-eye'
              onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          <div className='login__remember'>
            <input
              type='checkbox'
              id='remember_me'
              name='remember_me'
              ref={rememberMeInputRef}
            />
            <label htmlFor='remember_me'>Remember me</label>
          </div>

          <button className='login__btn'>Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
