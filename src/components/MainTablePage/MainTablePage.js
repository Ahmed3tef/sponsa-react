import React from 'react';
import { Container } from 'react-bootstrap';

import { MainTable, Search } from '../';
import './MainTablePage.css';
const MainTablePage = props => {
  return (
    <Container>
      <div className='table__header'>
        <div className='table-header'>
          <span>{props.title}</span>
        </div>
        <Search route={props.route} title={props.path} />
        {props.addIcon && (
          <div className='add-icon ' onClick={props.showAddHandler}>
            <img src={props.addIcon} alt='add icon' />
          </div>
        )}
      </div>
      <div className='main-table'></div>
      <MainTable
        token={props.token}
        path={props.path}
        data={props.data}
        updatedPage={props.updatedPage}
        setShowAddAD={props.setShowAddPage}
        setUpdatedPage={props.setUpdatedPage}
        setUpdatedType={props.setUpdatedType}
        image={props.image}
        englishName={props.englishName}
        arabicName={props.arabicName}
        arabicDesc={props.arabicDesc}
        englishDesc={props.englishDesc}
        setItemId={props.setItemId}
        setOverlay={props.setOverlay}
        setShowReviews={props.setShowReviews}
        action={props.action}
      />
    </Container>
  );
};

export default MainTablePage;
