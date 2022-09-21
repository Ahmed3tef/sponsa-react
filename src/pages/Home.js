import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HomeTable } from '../components';
import './Home.css';
const Home = () => {
  return (
    <main className='main p-5'>
      <h1 className='reports__heading'>Welcome , Hatem El-Shawaf.</h1>
      <Container fluid>
        <Row className='reports__main '>
          <h2 className='reports__title'>September Reports</h2>
          {[...new Array(4)].map(report => (
            <Col md={3}>
              <div className='reports__report'>
                <h3 className='reports__report-title'>Most Selling Product</h3>
                <p className='reports__report-info'>Sponsa Shampoo</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className='px-5'>
          <Col md={9}>
            <HomeTable />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
