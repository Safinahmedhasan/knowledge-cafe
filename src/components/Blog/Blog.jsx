import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Read from '../Read/Read';
import './Blog.css'
import Book from './Book/Book';

const Blog = () => {

    const [blog, setBlog] = useState([]);
    const [read, setRead] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    const handleAddToReadTime = (post) => {
        const newRead = [...read, post];
        setRead(newRead);
    }


    const handleAddToTitle = (post) => {
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
                <div className='sum-question'>
                    <h2 className='Recommendation-question'>Recommendation four question </h2>
                    <div className="question">
                        <h2>React Props and State difference.</h2>
                        <p>Props: Props is a mother component to child component data transfer method .</p>
                        <p>State:State is a method for storing data local to the computer. It schools the computer's identity. State variables and a computer</p>
                    </div>
                    <div className="question">
                        <h2>How to work useState in react?</h2>
                        <p>useState is a read hook. react hook use to set component render method. useState function work two difference way, first way- set variable and second way set function.</p>
                    </div>
                    <div className="question">
                        <h2>whats can useEffect do other then data load? </h2>
                        <p>1. Manipulating the DOM: The useEffect hook can be used to modify the DOM, such as adding or removing classes or attributes, or setting focus to an input element.

                             2. Event handling: You can use useEffect to register and unregister event listeners, such as click or keypress events.</p>
                    </div>
                    <div className="question">
                        <h2>How does react work?</h2>
                        <p>React is a JavaScript library for building a user interface. It works by dividing the user interface into iterative components called React components and combining them to create complex UIs.
</p>
                    </div>
                </div>
            </div>
            <div className='totalReadTime'>
                <Read read={read}></Read>
                <Book title={title}></Book>

            </div>
        </div>
    );
};

export default Blog;