import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, picture, message, rating } = props.review;
    return (
        <div className='review__card'>
            <div className='review_card_head'>
                <img className='review_card_img' src={picture} alt="" />
                <span className='review_card_name'>{name}</span>
            </div>
            <div className='review_card_rating'>Rating : {rating}</div>
            <p className='review__message'>{message}</p>
        </div>
    );
};

export default Review;