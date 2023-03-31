import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const Post = (props) => {
    const { img, read, author, title, authorImg, hashtag } = props.post;

    const  handleAddToReadTime = props.handleAddToReadTime;

    

    return (
        <div className='post-section'>
            <img src={img} alt="" />
            <div className='author-details'>
                <img className='author-img' src={authorImg} alt="" />
                <div className='author-info'>
                    <div className='author-sub-details'>
                        <h2 className='author-name'>{author}</h2>
                        <p className='author-post-date'>Mar 14 (4 Days ago)</p>
                    </div>
                    <div className='read-time'>
                             <button  onClick={() =>handleAddToReadTime(props.post)}>{read} min read</button>
                             <button><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
            </div>
            <h2 className='post-title'>{title}</h2>
            <p className='hashtag'>{hashtag}</p>

           <button><p className='make-as-read-button'>Mark as read</p></button>
        </div>
    );
};

export default Post;
