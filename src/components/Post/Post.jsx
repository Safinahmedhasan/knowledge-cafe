import React from 'react';
import './Post.css'

const Post = (props) => {
    const { img, read, author, title, authorImg } = props.blog;
    return (
        <div className='post-section'>
            <img src={img} alt="" />
            <div className='author-details'>
                <img className='author-img' src={authorImg} alt="" />
                <div className='author-sub-details'>
                    <h2 className='author-name'>{author}</h2>
                    <p className='author-post-date'>Mar 14 (4 Days ago)</p>
                </div>
            </div>
            <h2 className='post-title'>{title}</h2>
        </div>
    );
};

export default Post;
