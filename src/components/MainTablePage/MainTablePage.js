import React from 'react';
import { Container } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { MainTable } from '../';
import './MainTablePage.css';
const MainTablePage = props => {
  const setUp = upObject => {
    console.log(upObject);
    props.setUpdatedPage(upObject);
  };

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
        updatedPage={props.updatedPage}
        setShowAddAD={props.setShowAddPage}
        setUpdatedPage={props.setUpdatedPage}
        data={props.data}
        pagination={props.pagination}
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
