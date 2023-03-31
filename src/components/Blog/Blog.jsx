import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blog.css'

const Blog = () => {

    const [blog, setBlog] = useState([]);

    useEffect( () => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])



    return (
        <div className='shop-container'>
            <div className='post-container'>
                {
                    blog.map(blog => <Post 
                        key={blog.id}
                        blog={blog}
                    ></Post>)
                }
            </div>
            <div className='totalReadTime'>
                <p>hasan</p>
            </div>
        </div>
    );
};

export default Blog;