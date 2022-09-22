import React from 'react';
import addADIcon from '../assets/Add ADs.svg';
import { BiSearch } from 'react-icons/bi';
import { Container, Row } from 'react-bootstrap';
import './Ads.css';
import { MainTable } from '../components';
const Ads = () => {
  return (
    <div className='p-5 '>
      {/* <Container>
        <Row className=''>
          <div className='col mt-5'>
            <span>Active ADs</span>
          </div>
          <div className='search col'>
            <input type='text' />
            <BiSearch />
          </div>
          <div className='add-icon col'>
            <img src={addADIcon} alt='add icon' />
          </div>
        </Row>
      </Container> */}
      <div className='ads__header'>
        <div className='table-header'>
          <span>Active ADs</span>
        </div>
        <div className='search '>
          <input type='text' className='px-5 ' />
          <BiSearch />
        </div>
        <div className='add-icon '>
          <img src={addADIcon} alt='add icon' />
        </div>
      </div>
      <MainTable />
    </div>
  );
};

export default Ads;
