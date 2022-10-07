import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdmin } from '../../store/reducers/admin';
import UploadImg from './UploadImg';

const UploadProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAdmin());
  }, []);

  const adminData = useSelector(state => state.adminData.admin);

  return (
    <div className='profile-container'>
      <div className='profile-img'>
        <UploadImg />
      </div>
      <div className='profile-input'>
        <MiniText
          placeholder='Enter name here ...'
          label='Name'
          setName={setName}
          name={name}
        />
        <MiniText
          type='email'
          placeholder='Enter name here ...'
          label='Name'
          setName={setName}
          name={name}
        />
        <MiniText
          type='password'
          placeholder='Enter password here ...'
          label='Password'
          setName={setArabicName}
          name={arabicName}
        />
        <MiniText
          type='password'
          placeholder='Enter password here ...'
          label='Confirm Password'
          setName={setArabicName}
          name={arabicName}
        />
      </div>
    </div>
  );
};

export default UploadProfile;
