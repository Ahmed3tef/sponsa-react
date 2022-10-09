import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAdmin } from '../../store/reducers/admin';
import MiniText from './MiniText';
import uploadAndEdit from './upload-edit';
import UploadImg from './UploadImg';

const UploadProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAdmin());
  }, []);
  const adminData = useSelector(state => state.admin.admin);
  const [name, setName] = useState(adminData.name);
  const [phone, setPhone] = useState(adminData.phone);
  const [img, setImg] = useState(adminData.imageUrl);
  const [password, setPassword] = useState('');

  let token = localStorage.getItem('token');

  const uploadADHandler = () => {
    const fd = new FormData();

    const config = {
      headers: {
        Authorization: token,
      },
    };

    if (img) fd.append('image', img);
    if (name) fd.append('name', name);
    if (phone) fd.append('phone', phone);
    if (password) fd.append('password', password);
    uploadAndEdit(true, 'admin', fd, config, false, 'Your Profile');
  };

  return (
    <div className='profile-container'>
      <div className='profile-img'>
        <UploadImg profile={true} existingImg={img} setImg={setImg} />
      </div>
      <div className='profile-input'>
        <MiniText
          classes='mb-5'
          placeholder='Enter name here ...'
          label='Name'
          setName={setName}
          name={name}
        />
        <MiniText
          classes='mb-5'
          placeholder='Enter Phone Number here ...'
          label='Phone'
          setName={setPhone}
          name={phone}
        />
        <MiniText
          classes='mb-5'
          type='password'
          placeholder='Enter password here ...'
          label='Password'
          setName={setPassword}
          name={password}
        />

        <div className='form-btns mt-5 mx-auto'>
          <div className='form-btn' onClick={uploadADHandler}>
            save
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
