import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex join'>
            <button className='btn btn-secondary join-item'>Leates</button>
            <Marquee className='border join-item rounded-md bg-red-950 text-white' pauseOnHover={true}>
                <Link className='mr-12'>Lorem ipsum dolor sit amet consectetur.</Link>
                <Link className='mr-12'>Lorem ipsum dolor sit amet consectetur.</Link>
                <Link className='mr-12'>Lorem ipsum dolor sit amet consectetur.</Link>
              
            </Marquee>
        </div>
    );
};

export default BreakingNews;