import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import './Home.css';
const Home = () => {
  // const logoutHandler = () => {};

  return (
    <div className='home'>
      <Sidebar />

      <main className='main p-5'>
        <h1>Welcome , Hatem El-Shawaf.</h1>
        <Container fluid>
          <Row className='reports__main '>
            <h2 className='reports__title'>September Reports</h2>
            {[...new Array(4)].map(report => (
              <Col md={3}>
                <div className='reports__report'>
                  <h3 className='reports__report-title'>
                    Most Selling Product
                  </h3>
                  <p className='reports__report-info'>Sponsa Shampoo</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className='px-5'>
            <Col md={9}>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Home;
