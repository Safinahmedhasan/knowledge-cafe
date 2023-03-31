import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Read from '../Read/Read';
import './Blog.css'
import Book from './Book/Book';

const Blog = () => {

    const [blog, setBlog] = useState([]);
    const [read , setRead] = useState([]);
    const [title , setTitle] = useState([]);

    useEffect( () => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    const handleAddToReadTime = (post) =>{
        const newRead =[...read , post];
        setRead(newRead);
    }
    
    const handleAddToTitle = (post) =>{
        const newTitle = [...title, <li className='bookmark'>{post}</li>];
        setTitle(newTitle)
    }

    return (
        <div className='shop-container'>
            <div className='post-container'>
                {
                    blog.map(blog => <Post 
                        key={blog.id}
                        post={blog}
                        handleAddToReadTime={handleAddToReadTime}
                        handleAddToTitle={handleAddToTitle}
                    ></Post>)
                }
            </div>
            <div className='totalReadTime'>
                <Read read={read}></Read>
                <Book title={title}></Book>
                
            </div>
        </div>
    );
};

export default Blog;