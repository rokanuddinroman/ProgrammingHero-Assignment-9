import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();

    let navigate = useNavigate();

    return (
        <div className='container'>
            <div className="home__container">
                <div className='hero__intro'>
                    <h1 className='hero__title'>Expect the <span className='hero__key'>Unexpected</span></h1>
                    <h1 className='hero__title hero__title-second'><span className='hero__key'>Ultimate</span> Driving Machine.</h1>
                    <p>The Ferrari 488 has 1 Petrol Engine on offer. The Petrol engine is 3902 cc . It is available with Automatic and Manual transmission.</p>
                </div>
                <div>
                    <img className='hero__image' src="https://purepng.com/public/uploads/large/purepng.com-blue-ferrari-488-spider-carcarferrarivehicletransport-961524650215mnrnk.png" alt="" />
                </div>
            </div>
            <section className='review__section'>
                <h1>Some Reviews</h1>
                <div className="reviews__container__home">
                    {
                        reviews.slice(0, 3).map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
                <div style={{ textAlign: 'center' }}><button onClick={() => navigate("/reviews")} className='secondary__button'>See all Reviews</button></div>
            </section>
        </div>
    );
};

export default Home;