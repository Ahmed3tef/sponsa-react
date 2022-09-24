import React, { useRef, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';
import LargeText from './LargeText';

import axios from 'axios';
import { APIBase } from '../../store/reducers/api';

const UploadForm = ({ updatedAD }) => {
  const [arabicName, setArabicName] = useState(
    updatedAD ? updatedAD.arabicName : ''
  );
  const [englishName, setEnglishName] = useState(
    updatedAD ? updatedAD.englishName : ''
  );
  const [arabicDesc, setArabicDesc] = useState(
    updatedAD ? updatedAD.arabicDesc : ''
  );
  const [englishDesc, setEnglishDesc] = useState(
    updatedAD ? updatedAD.englishDesc : ''
  );
  const [img, setImg] = useState(updatedAD ? APIBase + updatedAD.imgUrl : '');
  const [imgAlt, setImgAlt] = useState(updatedAD ? updatedAD.imgAlt : '');
  const uploadADHandler = () => {
    console.log(img);

    const fd = new FormData();
    fd.append('image', img);

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
          image: fd,
          alt: imgAlt,
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
      <UploadImg
        existingImg={updatedAD ? updatedAD.imgUrl : null}
        setImg={setImg}
        setImgAlt={setImgAlt}
      />
      <div className='text-container'>
        <MiniText
          placeholder='Add AD title here ...'
          label='AD Title'
          setName={setEnglishName}
          name={englishName}
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
          setName={setArabicName}
          name={arabicName}
          direction='rtl'
        />
        <LargeText
          placeholder=' ...أضف وصف الإعلان هنا'
          label='وصف الإعلان'
          desc={arabicDesc}
          setDesc={setArabicDesc}
          direction='rtl'
        />
      </div>
      <div className='form-btns'>
        <div className='form-btn' onClick={uploadADHandler}>
          {updatedAD ? 'Save' : 'Upload'}
        </div>
        <div className='form-btn'>Cancel</div>
      </div>
    </div>
  );
};

export default UploadForm;
