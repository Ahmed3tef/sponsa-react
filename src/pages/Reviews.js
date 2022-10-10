import axios from 'axios';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { APIBase } from '../store/reducers/api';
import { loadReviews } from '../store/reducers/reviews';
import './reviews.css';
const Reviews = ({ updatedPage }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);
  // console.log(updatedPage);

  useEffect(() => {
    dispatch(loadReviews('6332e8f18dadd857244e5839'));
  }, [updatedPage]);
  console.log(reviews);
  // console.log(reviews);
  // const r = {
  //   comment: rating.personComment,
  //   starRate: rating.starRate,
  //   date: rating.timestamp,
  //   userName: ratings.userId.displayName,
  //   userImg: ratings.userId.imageUrl,
  // };
  return (
    <Container className='p-5 '>
      <div className='reviews'>
        {reviews.map(r => (
          <div className='review'>
            <div className='review-img'>
              <img src={r.userImg} alt='' />
            </div>
            <div className='review-content'>
              <div className='review-info'>
                <div className='user'>{`${r.userName} - ${r.date}`}</div>
                <div className='rating'></div>
              </div>
              <div className='review-comment'>{`${r.comment}`}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;
