import axios from 'axios';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { APIBase } from '../store/reducers/api';
import { loadReviews } from '../store/reducers/reviews';
import './reviews.css';
import { Ratings } from '../components';
const Reviews = ({ updatedPage: id }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    // id => '6332e8f18dadd857244e5839'
    dispatch(loadReviews(id));
  }, [id]);

  return (
    <Container fluid className='p-5 '>
      <div className='reviews'>
        <div className='reviews-title container-title'>
          {reviews && reviews[0] && reviews[0].productName}
        </div>
        {reviews.map(r => {
          return (
            <div className='review'>
              <div className='review-img'>
                <img src={r.userImg} alt='' />
              </div>
              <div className='review-content'>
                <div className='review-info'>
                  <div className='review-user mb-2'>
                    <span className='container-title me-4'>{`${r.userName}`}</span>
                    -
                    <span className='comment-date ms-4'>{`${new Date(
                      r.date
                    ).toLocaleString('en-CA', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      weekday: 'short',
                      hour: '2-digit',
                      hour12: true,
                      minute: '2-digit',
                      second: '2-digit',
                    })}`}</span>
                  </div>
                  <Ratings value={r.starRate} />
                </div>
                <div className='review-comment'>{`${r.comment}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Reviews;