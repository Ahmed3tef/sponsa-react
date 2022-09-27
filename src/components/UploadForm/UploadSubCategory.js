import React, { useRef, useState } from 'react';
import UploadImg from './UploadImg';
import './UploadForm.css';
import MiniText from './MiniText';
import LargeText from './LargeText';

import axios from 'axios';
import { APIBase } from '../../store/reducers/api';
import uploadAndEdit from './upload-edit';
import Selector from './Selector';
import { loadCategories } from '../../store/reducers/categories';
import { useDispatch } from 'react-redux';

const UploadSubCategory = ({ updatedPage, goBackHandler }) => {
  const [arabicName, setArabicName] = useState(
    updatedPage ? updatedPage.arabicName : ''
  );
  const [englishName, setEnglishName] = useState(
    updatedPage ? updatedPage.englishName : ''
  );
  const [catId, setCatId] = useState(
    updatedPage ? updatedPage.category.id : ''
  );

  const [img, setImg] = useState(
    updatedPage ? APIBase + updatedPage.imgUrl : ''
  );
  const [imgAlt, setImgAlt] = useState(updatedPage ? updatedPage.imgAlt : '');

  const dispatch = useDispatch();
  useState(() => {
    dispatch(loadCategories());
  }, []);

  const uploadADHandler = () => {
    const fd = new FormData();
    fd.append('image', img);
    fd.append('alt', imgAlt);
    fd.append('arabicName', arabicName);
    fd.append('englishName', englishName);
    fd.append('catId', catId);

    const config = {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjYzOTgwNDM5LCJleHAiOjE2NjY1NzI0Mzl9.Iqfmp-AnQ03Km85vyiYM5PCLZFuktUGDXZwymps5xrA',
        id: catId,
      },
    };
    uploadAndEdit(
      updatedPage,
      'subcat',
      fd,
      config,
      goBackHandler,
      'Subcategory'
    );
  };

  return (
    <div className='form-container'>
      <UploadImg
        existingImg={updatedPage ? updatedPage.imgUrl : null}
        setImg={setImg}
        setImgAlt={setImgAlt}
        title={['Subcategory Photo', 'صورة الفئة الفرعية']}
      />
      <div className='text-container mb-5 mt-5'>
        <MiniText
          placeholder='Add Subcategory title here ...'
          label='Subcategory Title'
          setName={setEnglishName}
          name={englishName}
        />
      </div>
      <div className='text-container mb-5 mt-5'>
        <MiniText
          placeholder=' ...أضف عنوان الفئة الفرعية هنا'
          label='عنوان الفئة الفرعية'
          setName={setArabicName}
          name={arabicName}
          direction='rtl'
        />
      </div>
      <div className='text-container mb-5 mt-5'>
        <Selector
          label={
            <>
              <p>Main Category</p>
              <p>الفئة الرئيسية</p>
            </>
          }
          catId={catId}
          setCatId={setCatId}
        />
      </div>
      <div className='form-btns mt-5'>
        <div className='form-btn' onClick={uploadADHandler}>
          {updatedPage ? 'Save' : 'Upload'}
        </div>
        <div className='form-btn' onClick={goBackHandler}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default UploadSubCategory;
