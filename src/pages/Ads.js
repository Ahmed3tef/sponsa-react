import React, { useEffect, useState } from 'react';
import addADIcon from '../assets/Add ADs.svg';
import backIcon from '../assets/backIcon.svg';
import { BiSearch } from 'react-icons/bi';
import { Container, Row } from 'react-bootstrap';
import './Ads.css';
import { MainTable, MainTablePage, UploadForm } from '../components';
import { loadAds } from '../store/reducers/ads';
import { useDispatch, useSelector } from 'react-redux';
const Ads = () => {
  const ads = useSelector(state => state.ads.ads);
  const [showAddAD, setShowAddAD] = useState(false);
  const [updatedAD, setUpdatedAD] = useState(null);

  const dispatch = useDispatch();

  const showAddADHandler = () => {
    setUpdatedAD(null);
    setShowAddAD(true);
  };
  const goBackHandler = () => {
    dispatch(loadAds());
    setShowAddAD(false);
  };

  useEffect(() => {
    dispatch(loadAds());
  }, []);

  return (
    <>
      {!showAddAD && (
        <Container>
          <div className='ads__header'>
            <div className='table-header'>
              <span>Active ADs</span>
            </div>
            <div className='search '>
              <input type='text' className='px-5 ' />
              <BiSearch />
            </div>
            <div className='add-icon ' onClick={showAddADHandler}>
              <img src={addADIcon} alt='add icon' />
            </div>
          </div>
          <MainTable
            setShowAddPage={setShowAddAD}
            setUpdatedPage={setUpdatedAD}
          />
        </Container>
        // <MainTablePage
        //   setShowAddPage
        //   setUpdatedPage
        //   colData={colData}
        //   data={ads}
        //   pagination={false}
        //   addIcon={addADIcon}
        // />
      )}

      {showAddAD && (
        <Container>
          <div className='back-icon ' onClick={goBackHandler}>
            <img src={backIcon} alt='back icon' />
          </div>
          <UploadForm updatedAD={updatedAD} goBackHandler={goBackHandler} />
        </Container>
      )}
    </>
  );
};

export default Ads;
