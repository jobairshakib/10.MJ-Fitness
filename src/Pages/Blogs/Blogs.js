import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1 className='blogs-title text-center mt-5'>Blogs</h1>
            <div className='blogs-container'>
                <div className='blogs-card'>
                    <h3>Question</h3>
                    <p>Ans:</p>
                </div>
                <div className='blogs-card'>
                    <h3>Question</h3>
                    <p>Ans:</p>
                </div>
                <div className='blogs-card'>
                    <h3>Question</h3>
                    <p>Ans:</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;