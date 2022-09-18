import React, { useRef } from 'react';
import './Login.css';
import logoImg from '../assets/sponsaLogo.png';
import passIcon from '../assets/Password.svg';
import userIcon from '../assets/User.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  return (
    <div className='login'>
      <section className='login__form'>
        <div className='login__logo'>
          <img src={logoImg} alt='logo ' />
        </div>
        <form>
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
