import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
            <h2>Blogs Page</h2>
            <div className="blogs__container">
                <div>
                    <h2>What is Semanctic Tag?</h2>
                    <p>There are basically two types of tags. Those are Semantic and Non-Semantic tag. For example Span, Div are Non semantic tag. Header, Footer, Main are Semantic tag. Basically tags that make sense are called Semantic tag. Since we can't understand a section that made with div. If it is a Header or a Card or a Footer. So tags that clearly describe itself is called Semantic Tag.</p>
                </div>
                <div>
                    <h2>What is Inline and Block Element?</h2>
                    <p>Block elements are those that occupy full horizontal width of available space. Inline elements are those that occupy it's own space. Heading tags are Block Element. On the other hand Span, Li are Inline Element. By the way we can switch between Inline and Block by add some css property.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;