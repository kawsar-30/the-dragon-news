import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';
import Header from '../Shared/Header/Header';

import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Carrear = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('public/data/carrear.json')
            .then(resp => resp.json())
            .then(data => setJobs(data));
    }, []);

    return (
     <>
      <Header></Header>
      <Navbar></Navbar>
            {/* Header Section */}
            <div className="text-center mb-16 mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Jobs Category</h2>
                <small className="block text-gray-600 max-w-lg mx-auto">
                    Explore thousands of job opportunities with all the information you need. It's your future!
                </small>
            </div>

            {/* Responsive Grid Section */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {jobs.map((jb) => (
                        <SingleJob key={jb.id} jb={jb} />
                    ))}
                </div>
            </div>
            <Footer></Footer>
     </>
    );
};

export default Carrear;
