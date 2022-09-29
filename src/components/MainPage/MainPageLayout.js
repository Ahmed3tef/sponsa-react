import React, { useEffect, useState } from 'react';

import backIcon from '../../assets/backIcon.svg';

import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import {
  MainTablePage,
  UploadCategory,
  UploadForm,
  UploadSubCategory,
} from '..';

const MainPageLayout = props => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [updatedPage, setUpdatedPage] = useState(null);
  // const [upObject, setUpObject] = useState(null);

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

  return (
    <>
      {!showAddPage && (
        <MainTablePage
          path={props.path}
          title={props.title}
          setShowAddPage={setShowAddPage}
          showAddHandler={showAddHandler}
          setUpdatedPage={setUpdatedPage}
          updatedPage={updatedPage}
          data={props.data}
          addIcon={props.addIcon}
          image={props.image}
          arabicName={props.arabicName}
          englishName={props.englishName}
          arabicDesc={props.arabicDesc}
          englishDesc={props.englishDesc}
        />
      )}

      {showAddPage && (
        <Container className='h-100'>
          <div className='back-icon ' onClick={goBackHandler}>
            <img src={backIcon} alt='back icon' />
          </div>
          {props.path === 'ads' && (
            <UploadForm
              updatedPage={updatedPage}
              goBackHandler={goBackHandler}
            />
          )}
          {props.path === 'categories' && (
            <UploadCategory
              updatedPage={updatedPage}
              goBackHandler={goBackHandler}
            />
          )}
          {props.path === 'subCategories' && (
            <UploadSubCategory
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
