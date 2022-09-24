import React, { useRef, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';
import LargeText from './LargeText';

import axios from 'axios';
import { APIBase } from '../../store/reducers/api';

const UploadForm = () => {
  const [arabicName, setArabicName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [arabicDesc, setArabicDesc] = useState('');
  const [englishDesc, setEnglishDesc] = useState('');
  const [img, setImg] = useState(null);

  const [imgAlt, setImgAlt] = useState('');
  const uploadADHandler = () => {
    console.log(img);

    let formData = new FormData();
    formData.append('image', img);

    const config = {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjYzOTgwNDM5LCJleHAiOjE2NjY1NzI0Mzl9.Iqfmp-AnQ03Km85vyiYM5PCLZFuktUGDXZwymps5xrA',
      },
    };
    axios
      .post(
        `${APIBase}ads/create`,
        {
          image: formData,
          alt: 'sdfasdfsa',
          arabicName,
          englishName,
          arabicDesc,
          englishDesc,
        },
        config
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='form-container'>
      <UploadImg setImg={setImg} setImgAlt={setImgAlt} />
      <div className='text-container'>
        <MiniText
          placeholder='Add AD title here ...'
          label='AD Title'
          setName={setArabicName}
          name={arabicName}
        />
        <LargeText
          placeholder='Add AD description here ...'
          label='AD Description'
          desc={englishDesc}
          setDesc={setEnglishDesc}
        />
      </div>
      <div className='text-container'>
        <MiniText
          placeholder=' ...أضف عنوان الإعلان هنا'
          label='عنوان الإعلان'
          setName={setEnglishName}
          name={englishName}
        />
        <LargeText
          placeholder=' ...أضف وصف الإعلان هنا'
          label='وصف الإعلان'
          desc={arabicDesc}
          setDesc={setArabicDesc}
        />
      </div>
      <div className='form-btns'>
        <div className='form-btn' onClick={uploadADHandler}>
          Upload
        </div>
        <div className='form-btn'>Cancel</div>
      </div>
    </div>
  );
};

export default UploadForm;
