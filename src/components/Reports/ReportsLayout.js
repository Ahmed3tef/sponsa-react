import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Chart, ReportsTable } from '..';
import { loadMostSelling } from '../../store/reducers/reports';

const ReportsLayout = props => {
  // dispatch to fetch here
  const mostSelling = useSelector(state => state.reports.mostSelling);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMostSelling({ page: 0, asce: -1 }));
  }, [dispatch]);

  return (
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
          <ReportsTable
            token={props.token}
            path='most-product'
            data={mostSelling}
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
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default ReportsLayout;
