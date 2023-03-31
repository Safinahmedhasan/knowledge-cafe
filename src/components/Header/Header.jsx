import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <h2 className='header-title'>Programming Cafe</h2>
            <img className='header-image' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
        </div>
    );
};

export default Header;