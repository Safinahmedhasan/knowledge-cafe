import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Read from '../Read/Read';
import './Blog.css'

const Blog = () => {

    const [blog, setBlog] = useState([]);
    const [read , setRead] = useState([])

    useEffect( () => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    const handleAddToReadTime = (post) =>{
        const newRead =[...read , post];
        setRead(newRead);
    }

    return (
        <div className='shop-container'>
            <div className='post-container'>
                {
                    blog.map(blog => <Post 
                        key={blog.id}
                        post={blog}
                        handleAddToReadTime={handleAddToReadTime}
                    ></Post>)
                }
            </div>
            <div className='totalReadTime'>
                <Read read={read}></Read>
            </div>
        </div>
    );
};

export default Blog;