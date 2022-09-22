import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './mainTable.css';

const URL = 'https://api-sponsa.worldproductsae.com/';
const tableData = [
  {
    name: 'البانر الأول',
    id: '632b202a0f49022846363c5c',
    names: {
      arabic: 'البانر الأول',
      english: 'first banner',
    },
    description: {
      arabic: 'الوصف الأول',
      english: 'first description',
    },
    image: {
      imageUrl: 'adsImage/2a1a767a-9724-4bec-9796-ae6a1ed5aac9.jpeg',
      alt: 'ads first image',
    },
    position: 1,
    status: 1,
  },
  {
    name: 'البانر الأول',
    id: '632b202a0f49022846363c5c',
    names: {
      arabic: 'البانر الأول',
      english: 'first banner',
    },
    description: {
      arabic: 'الوصف الأول',
      english: 'first description',
    },
    image: {
      imageUrl: 'adsImage/2a1a767a-9724-4bec-9796-ae6a1ed5aac9.jpeg',
      alt: 'ads first image',
    },
    position: 1,
    status: 1,
  },
  ,
  {
    name: 'البانر الأول',
    id: '632b202a0f49022846363c5c',
    names: {
      arabic: 'البانر الأول',
      english: 'first banner',
    },
    description: {
      arabic: 'الوصف الأول',
      english: 'first description',
    },
    image: {
      imageUrl: 'adsImage/2a1a767a-9724-4bec-9796-ae6a1ed5aac9.jpeg',
      alt: 'ads first image',
    },
    position: 1,
    status: 1,
  },
  ,
  {
    name: 'البانر الأول',
    id: '632b202a0f49022846363c5c',
    names: {
      arabic: 'البانر الأول',
      english: 'first banner',
    },
    description: {
      arabic: 'الوصف الأول',
      english: 'first description',
    },
    image: {
      imageUrl: 'adsImage/2a1a767a-9724-4bec-9796-ae6a1ed5aac9.jpeg',
      alt: 'ads first image',
    },
    position: 1,
    status: 1,
  },
];

const MainTable = () => {
  return (
    <div className='ads__table'>
      <Container fluid>
        <Row className='t-head'>
          <Col sm={1}>
            <div className='t-span'>#</div>
          </Col>
          <Col sm={2} className='p-0'>
            AD Photo صورة الإعلان
          </Col>
          <Col sm={2}>AD Title Count</Col>
          <Col sm={1}>عنوان الإعلان</Col>
          <Col sm={2}>AD Description</Col>
          <Col sm={2}>وصف الإعلان</Col>
          <Col sm={2}>Actions الإجراءات</Col>
        </Row>
      </Container>

      <Container fluid>
        {tableData.map((prod, i) => (
          <Row key={i} className='t-body'>
            <Col sm={1}>
              <div className='t-span'>{prod.position}</div>
            </Col>
            <Col sm={2} className='p-0'>
              <div className='t-span t-prod '>
                <img
                  src={`${URL}${prod.image.imageUrl}`}
                  alt={prod.image.alt}
                  className='img-fluid'
                />
              </div>
            </Col>
            <Col sm={2}>
              <div className='t-span'>{prod.names.english}</div>
            </Col>
            <Col sm={1}>
              <div className=' t-span'>{prod.names.arabic}</div>
            </Col>
            <Col sm={2}>
              <div className=' t-span '>{prod.description.english}</div>
            </Col>
            <Col sm={2}>
              <div className=' t-span'>{prod.description.arabic}</div>
            </Col>
            <Col sm={2}>
              <div className=' t-span'>{prod.description.arabic}</div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default MainTable;
