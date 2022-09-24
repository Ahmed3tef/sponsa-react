import React, { useEffect, useRef, useState } from 'react';
import imgIcon from '../../assets/Add Photo.svg';
import './UploadForm.css';

import { APIBase } from '../../store/reducers/api';

const UploadImg = props => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(
    props.existingImg ? APIBase + props.existingImg : null
  );
  const [imgAlt, setImgAlt] = useState('');
  const fileImgInput = useRef(null);

  const onAddImage = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setImgAlt(e.target.files[0].name.replace(/\.[^/.]+$/, ''));
      setPreview(window.URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0]);

      return;
    }
  };
  useEffect(() => {
    props.setImgAlt(imgAlt);
    props.setImg(file);
  }, [imgAlt, file]);

  return (
    <div className='img-uploader'>
      <div className='input-label'>
        <p>AD Photo</p>
        <p>صورة الإعلان</p>
      </div>
      <div className='upload-card'>
        <div
          id='preview'
          className='preview'
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
            filename={file}
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
