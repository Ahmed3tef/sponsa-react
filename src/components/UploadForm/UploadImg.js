import React, { useRef, useState } from 'react';
import imgIcon from '../../assets/Add Photo.svg';
import './UploadForm.css';

const UploadImg = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);
  const [imgAlt, setImgAlt] = useState('');
  const fileImgInput = useRef(null);

  const onAddImage = file => {
    if (file) {
      setImgAlt(file.name.replace(/\.[^/.]+$/, ''));
      window.URL.revokeObjectURL(preview);
      setPreview(window.URL.createObjectURL(file));
      return;
    }
  };
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
            onChange={e => onAddImage(e.target.files[0])}
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
