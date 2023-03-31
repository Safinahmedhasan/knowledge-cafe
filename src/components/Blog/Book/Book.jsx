import React from 'react';
import './Book.css'

const Book = (props) => {
    const {title} = props;



    let total = 0;
    for (const post of title){
        total = total + post.title;
    }

    return (
        <div className='bookmark-title'>
            <h3>Bookmarked Blogs: {title.length}</h3>
            <p>{title}</p>
        </div>
    );
};

export default Book;