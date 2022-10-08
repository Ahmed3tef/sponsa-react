import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdmin } from '../../store/reducers/admin';
import MiniText from './MiniText';
import UploadImg from './UploadImg';

const UploadProfile = () => {
  const [name, setName] = useState('asdasd');
  const adminData = useSelector(state => state.admin.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAdmin());
  }, []);
  console.log(adminData);

  return (
    <div className='profile-container'>
      <div className='profile-img'>
        <UploadImg profile={true} />
      </div>
      <div className='profile-input'>
        <MiniText
          placeholder='Enter name here ...'
          label='Name'
          setName={setName}
          name={name}
        />

        <MiniText
          type='password'
          placeholder='Enter password here ...'
          label='Password'
        />
        <MiniText
          type='password'
          placeholder='Re Enter password here ...'
          label='Confirm Password'
        />
      </div>
    </div>
  );
};

export default UploadProfile;
