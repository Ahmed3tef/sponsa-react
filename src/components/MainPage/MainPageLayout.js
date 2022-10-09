import React, { useEffect, useState } from 'react';

import backIcon from '../../assets/backIcon.svg';
import './MainPageLayout.css';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  MainTablePage,
  UploadAds,
  UploadCategory,
  UploadProduct,
  UploadSubCategory,
} from '..';
import axios from 'axios';
import { APIBase } from '../../store/reducers/api';

const MainPageLayout = props => {
  const token = useSelector(state => state.auth.token);
  const [showAddPage, setShowAddPage] = useState(false);
  const [updatedPage, setUpdatedPage] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [itemId, setItemId] = useState('');
  const dispatch = useDispatch();

  const showAddHandler = () => {
    setUpdatedPage(null);
    setShowAddPage(true);
  };
  const goBackHandler = () => {
    dispatch(props.action);
    setShowAddPage(false);
  };

  useEffect(() => {
    dispatch(props.action);
  }, []);

  const deleteHandler = () => {
    const fd = new FormData();
    fd.append('status', 0);
    const config = {
      headers: {
        authorization: token,
      },
      params: { id: itemId },
    };
    if (props.route === `ads`) {
      axios.delete(`${APIBase}${props.route}`, config);
    } else {
      axios.patch(`${APIBase}${props.route}/update`, fd, config);
    }

    dispatch(props.action);
    setOverlay(false);
  };

  return (
    <>
      {!showAddPage && (
        <MainTablePage
          token={token}
          path={props.path}
          title={props.title}
          setShowAddPage={setShowAddPage}
          showAddHandler={showAddHandler}
          setUpdatedPage={setUpdatedPage}
          updatedPage={updatedPage}
          setOverlay={setOverlay}
          setItemId={setItemId}
          data={props.data}
          addIcon={props.addIcon}
          image={props.image}
          arabicName={props.arabicName}
          englishName={props.englishName}
          arabicDesc={props.arabicDesc}
          englishDesc={props.englishDesc}
        />
      )}
      {overlay && (
        <div className='delete-overlay'>
          <div className='delete-overlay-content'>
            <h3 className='overlay-header'>
              {`Are you sure you want to permanently delete this ${props.deleteTitle}?`}
            </h3>
            <div className='overlay-btns'>
              <div className='overlay-btn' onClick={deleteHandler}>
                Yes
              </div>
              <div className='overlay-btn' onClick={() => setOverlay(false)}>
                No
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddPage && (
        <Container className='h-100'>
          <div className='back-icon ' onClick={goBackHandler}>
            <img src={backIcon} alt='back icon' />
          </div>
          {props.path === 'ads' && (
            <UploadAds
              token={token}
              updatedPage={updatedPage}
              goBackHandler={goBackHandler}
            />
          )}
          {props.path === 'categories' && (
            <UploadCategory
              token={token}
              updatedPage={updatedPage}
              goBackHandler={goBackHandler}
            />
          )}
          {props.path === 'subCategories' && (
            <UploadSubCategory
              token={token}
              updatedPage={updatedPage}
              goBackHandler={goBackHandler}
            />
          )}
          {props.path === 'products' && (
            <UploadProduct
              token={token}
              updatedPage={updatedPage}
              goBackHandler={goBackHandler}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default MainPageLayout;
