import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container'>
            <h1 className="main-title">Every Reviews</h1>
            <div className="reviews__container">
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;