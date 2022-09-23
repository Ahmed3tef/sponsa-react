import React, { useRef, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';
import LargeText from './LargeText';

const UploadForm = () => {
  return (
    <div className='form-container'>
      <UploadImg />
      <div className='text-container'>
        <MiniText placeholder='Add AD title here ...' label='AD Title' />
        <LargeText
          placeholder='Add AD description here ...'
          label='AD Description'
        />
      </div>
      <div className='text-container'>
        <MiniText
          placeholder=' ...أضف عنوان الإعلان هنا'
          label='عنوان الإعلان'
        />
        <LargeText placeholder=' ...أضف وصف الإعلان هنا' label='وصف الإعلان' />
      </div>
      <div className='form-btns'>
        <div className='form-btn'>Upload</div>
        <div className='form-btn'>Cancel</div>
      </div>
    </div>
  );
};

export default UploadForm;
