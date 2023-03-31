import React from 'react';
import './Read.css'

const Read = (props) => {
    const {read} = props;

    let total = 0;
    for (const post of read){
        total = total + post.read;
    }

    return (
        <div className='read-time'>
            <p className='total-read-time'>Spent time on read : {total} min</p>
        </div>
    );
};

export default Read;