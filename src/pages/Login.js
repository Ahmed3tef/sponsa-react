import React, { useRef, useEffect } from 'react';
import './Login.css';
import logoImg from '../assets/sponsaLogo.png';
import passIcon from '../assets/Password.svg';
import userIcon from '../assets/User.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/reducers/auth';

const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    dispatch(loginUser({ email, password }));
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
              type='password'
              id='password'
              placeholder='Password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className='login__remember'>
            <input
              type='checkbox'
              id='remember_me'
              name='remember_me'
              value='Remember me'
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
