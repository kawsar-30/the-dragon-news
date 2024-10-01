import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import RightNavbar from '../../Shared/RightNavbar/RightNavbar';
import LeftNavbar from '../../Shared/LeftNavbar/LeftNavbar';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';
import Footer from '../../Footer/Footer';

const Home = () => {
    const news =useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
          

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center'>
                <div className='md:col-span-1   px-8 '>
                    <LeftNavbar className=''></LeftNavbar>
                </div>

                <div className='md:col-span-2 '>
                    {
                        news.map(singleNews =><NewsCard key={singleNews._id
                        } news ={singleNews}></NewsCard>)
                    }
                </div>

                <div className='md:col-span-1  '>
                    <RightNavbar></RightNavbar>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;