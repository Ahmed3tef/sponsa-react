import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Chart, ReportsTable } from '..';
import {
  loadMostCustomers,
  loadMostSelling,
} from '../../store/reducers/reports';
import './ReportsLayout.css';

const ReportsLayout = props => {
  // dispatch to fetch here
  const mostSelling = useSelector(state => state.reports.mostSelling);
  const mostCustomers = useSelector(state => state.reports.mostCustomer);
  const [path, setPath] = useState('products');

  const [data, setData] = useState(mostSelling);
  const range = props.range ? props.range : null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMostSelling({ params: { asce: -1 }, data: range }));
    dispatch(loadMostCustomers({ params: { asce: -1 }, data: range }));
  }, [dispatch, range]);

  useEffect(() => {
    setData(mostSelling);
  }, [mostSelling]);

  const setMostSellingHandler = (e, path) => {
    setPath(path);
    setData(mostSelling);
  };
  const setMostCustomerHandler = (e, path) => {
    setPath(path);
    setData(mostCustomers);
  };
  return (
    <Container fluid>
      <Row className='reports__main '>
        {props.title && <h2 className='reports__title'>September Reports</h2>}
        <Col sm={3} className='report'>
          <div
            className='reports__report'
            onClick={e => {
              setMostSellingHandler(e, 'products');
            }}>
            <h3 className='reports__report-title'>Most Selling Product</h3>
            <p className='reports__report-info'>Sponsa Shampoo</p>
          </div>
        </Col>
        <Col sm={3} className='report'>
          <div
            className='reports__report'
            onClick={e => setMostCustomerHandler(e, 'customers')}>
            <h3 className='reports__report-title'>Top Customer</h3>
            <p className='reports__report-info'>Ahmed Mohamed Ibrahiem</p>
          </div>
        </Col>
        <Col sm={3} className='report'>
          <div className='reports__report'>
            <h3 className='reports__report-title'>Income</h3>
            <p className='reports__report-info'>EGP 1500</p>
          </div>
        </Col>
        <Col sm={3} className='report'>
          <div className='reports__report'>
            <h3 className='reports__report-title'>Expenses</h3>
            <p className='reports__report-info'>EGP 1500</p>
          </div>
        </Col>
      </Row>
      <Row className='px-5'>
        <Col sm={9} className='reports__table'>
          <ReportsTable
            token={props.token}
            path={path}
            data={data}
            // updatedPage={props.updatedPage}
            // setShowAddAD={props.setShowAddPage}
            // setUpdatedPage={props.setUpdatedPage}
            // image={props.image}
            // englishName={props.englishName}
            // arabicName={props.arabicName}
            // arabicDesc={props.arabicDesc}
            // englishDesc={props.englishDesc}
            // setItemId={props.setItemId}
            // setOverlay={props.setOverlay}
            //   setShowReviews={props.setShowReviews}
          />
        </Col>
        <Col sm={3}>
          <Chart data={data} path={path} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReportsLayout;
