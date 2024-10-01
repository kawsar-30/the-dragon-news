import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import BreakingNews from './BreakingNews';

const Header = () => {
    return (
        <div  className='text-center  '>
           <img src={logo} className='mx-auto mb-4' alt="" />
           <p className='text-2xl mb-2'>Journel with fear and fav</p>
           <span className='text-l'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
          
            
           <BreakingNews></BreakingNews>
          
           
        </div>
       
    );
};

export default Header;