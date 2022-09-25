import React, { useRef, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';
import LargeText from './LargeText';

import axios from 'axios';
import { APIBase } from '../../store/reducers/api';

const UploadCategory = ({ updatedPage, goBackHandler }) => {
  const [arabicName, setArabicName] = useState(
    updatedPage ? updatedPage.arabicName : ''
  );
  const [englishName, setEnglishName] = useState(
    updatedPage ? updatedPage.englishName : ''
  );
  const [img, setImg] = useState(
    updatedPage ? APIBase + updatedPage.imgUrl : ''
  );
  const [imgAlt, setImgAlt] = useState(updatedPage ? updatedPage.imgAlt : '');
  console.log(updatedPage);
  const uploadADHandler = () => {
    console.log(img);

    const fd = new FormData();
    fd.append('image', img);
    fd.append('alt', imgAlt);
    fd.append('arabicName', arabicName);
    fd.append('englishName', englishName);

    const config = {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjYzOTgwNDM5LCJleHAiOjE2NjY1NzI0Mzl9.Iqfmp-AnQ03Km85vyiYM5PCLZFuktUGDXZwymps5xrA',
      },
    };
    if (updatedPage) {
      // console.log(updatedAD);
      axios
        .patch(`${APIBase}cat/update?id=${updatedPage.id}`, fd, config)
        .then(res => {
          console.log(res);
          goBackHandler();
        })
        .catch(err => console.log(err));
      return;
    }
    axios
      .post(`${APIBase}cat/create`, fd, config)
      .then(res => {
        console.log(res);
        goBackHandler();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='form-container'>
      <UploadImg
        existingImg={updatedPage ? updatedPage.imgUrl : null}
        setImg={setImg}
        setImgAlt={setImgAlt}
        title={['Category Photo', 'صورة الفئة']}
      />
      <div className='text-container mb-5 mt-5'>
        <MiniText
          placeholder='Add Category title here ...'
          label='Category Title'
          setName={setEnglishName}
          name={englishName}
        />
      </div>
      <div className='text-container mb-5 mt-5'>
        <MiniText
          placeholder=' ...أضف عنوان الفئة هنا'
          label='عنوان الفئة'
          setName={setArabicName}
          name={arabicName}
          direction='rtl'
        />
      </div>
      <div className='form-btns mt-5'>
        <div className='form-btn' onClick={uploadADHandler}>
          {updatedPage ? 'Save' : 'Upload'}
        </div>
        <div className='form-btn'>Cancel</div>
      </div>
    </div>
  );
};

export default UploadCategory;
