import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home__container container'>
            <div className='hero__intro'>
                <h1 className='hero__title'>Expect the <span className='hero__key'>Unexpected</span></h1>
                <h1 className='hero__title hero__title-second'><span className='hero__key'>Ultimate</span> Driving Machine.</h1>
                <p>The Ferrari 488 has 1 Petrol Engine on offer. The Petrol engine is 3902 cc . It is available with Automatic and Manual transmission.</p>
            </div>
            <div>
                <img className='hero__image' src="https://purepng.com/public/uploads/large/purepng.com-blue-ferrari-488-spider-carcarferrarivehicletransport-961524650215mnrnk.png" alt="" />
            </div>
        </div>
    );
};

export default Home;