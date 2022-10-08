import React, { useEffect, useRef, useState } from 'react';
import imgIcon from '../../assets/Add Photo.svg';
import './UploadForm.css';

import { APIBase } from '../../store/reducers/api';

const UploadImg = props => {
  const [imgFile, setImgFile] = useState();
  const [preview, setPreview] = useState(
    props.existingImg ? APIBase + props.existingImg : null
  );

  const fileImgInput = useRef(null);

  const onAddImage = e => {
    if (e.target.files[0]) {
      setImgFile(e.target.files[0]);
      setPreview(window.URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0]);
      console.log(e.target.files[0].name.replace(/\.[^/.]+$/, ''));
      if (props.setImgAlt && props.setImg) {
        props.setImgAlt(e.target.files[0].name.replace(/\.[^/.]+$/, ''));
        props.setImg(e.target.files[0]);
      }
      return;
    }
  };
  // useEffect(() => {
  //   props.setImgAlt(imgAlt);
  //   props.setImg(file);
  // }, [imgAlt, file]);

  return (
    <div
      className={`${props.classes} ${
        props.profile ? 'img-uploader-profile' : 'img-uploader'
      }`}>
      {props.title && (
        <div className='input-label'>
          <p>{props.title[0]}</p>
          <p> {props.title[1]}</p>
        </div>
      )}
      <div className='upload-card'>
        <div
          id='preview'
          className={props.profile ? 'profile-preview' : 'preview'}
          onClick={() => fileImgInput.current && fileImgInput.current.click()}>
          <div className='image-container'>
            {/* <img src={preview} alt='prev' /> */}
            <img
              src={preview || imgIcon}
              id='image'
              alt='Thumbnail'
              className={preview ? 'imgHeight' : ''}
            />
          </div>

          <input
            style={{ display: 'none' }}
            filename={imgFile}
            onChange={onAddImage}
            ref={fileImgInput}
            type='file'
            accept='image/*'
            id='image-selection-btn'></input>
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
