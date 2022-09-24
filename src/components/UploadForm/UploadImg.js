import React, { useRef, useState } from 'react';
import imgIcon from '../../assets/Add Photo.svg';
import './UploadForm.css';

const UploadImg = props => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);
  const [imgAlt, setImgAlt] = useState('');
  const fileImgInput = useRef(null);

  const onAddImage = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setImgAlt(file.name.replace(/\.[^/.]+$/, ''));
      // window.URL.revokeObjectURL(preview);
      setPreview(window.URL.createObjectURL(file));
      // props.setImgAlt(file.name.replace(/\.[^/.]+$/, ''));
      // props.setImg(window.URL.createObjectURL(file));
      props.setImg(e.target.files[0]);

      return;
    }
  };
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [imgAlt, file]);

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
            onChange={e => onAddImage(e)}
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
