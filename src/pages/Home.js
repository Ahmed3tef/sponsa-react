import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HomeTable } from '../components';
import './Home.css';
const Home = () => {
  return (
    <>
      <h1 className='reports__heading'>Welcome , Hatem El-Shawaf.</h1>
      <Container fluid>
        <Row className='reports__main '>
          <h2 className='reports__title'>September Reports</h2>
          {[...new Array(4)].map((report, i) => (
            <Col sm={3} key={i}>
              <div className='reports__report'>
                <h3 className='reports__report-title'>Most Selling Product</h3>
                <p className='reports__report-info'>Sponsa Shampoo</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className='px-5'>
          <Col sm={9}>
            <HomeTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
