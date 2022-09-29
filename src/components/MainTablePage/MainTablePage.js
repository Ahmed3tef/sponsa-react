import React from 'react';
import { Container } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { MainTable } from '../';
import './MainTablePage.css';
const MainTablePage = props => {
  return (
    <Container>
      <div className='table__header'>
        <div className='table-header'>
          <span>{props.title}</span>
        </div>
        <div className='search '>
          <input type='text' className='px-5 ' />
          <BiSearch />
        </div>
        <div className='add-icon ' onClick={props.showAddHandler}>
          <img src={props.addIcon} alt='add icon' />
        </div>
      </div>
      <MainTable
        path={props.path}
        data={props.data}
        updatedPage={props.updatedPage}
        setShowAddAD={props.setShowAddPage}
        setUpdatedPage={props.setUpdatedPage}
        image={props.image}
        englishName={props.englishName}
        arabicName={props.arabicName}
        arabicDesc={props.arabicDesc}
        englishDesc={props.englishDesc}
      />
    </Container>
  );
};

export default MainTablePage;
