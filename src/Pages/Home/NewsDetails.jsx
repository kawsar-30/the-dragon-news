import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import RightNavbar from '../../Shared/RightNavbar/RightNavbar';
import { useState, useEffect } from 'react';

const NewsDetails = () => {
    
    const {id}=useParams() // Get the loaded data
    const [news,SetNews] =useState(null)


    useEffect(() => {
        const fetchNews = async () => {
            const resp = await fetch('/data/news.json');  // Fetch the list of jobs
            const data = await resp.json();  // Convert the fetched data into JSON
            const foundNews = data.find((item) => item._id === id || item.id === parseInt(id));;  // Find the specific job by ID
            console.log(foundNews);  // Optional: log the found job to the console for debugging
            SetNews(foundNews);  // Update the job state with the found job
        };

        fetchNews();  // Call the fetch function
    }, [id]); 

    
    // If nz is still null, show a loading message or placeholder
    if (!news) {
        return <p>Loading news details...</p>;
    }

    // Render the news details once nz has been set
    return (
       <>
        <Header />
        <Navbar />
        <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Main Content */}
                    <div className="col-span-3 text-black bg-white p-4 rounded shadow-md">
                        <h2 className="text-2xl font-bold mb-4">{news.title || 'News Title'}</h2>
                        <img src={news.image_url} alt={news.title} className="w-full h-auto mb-4 rounded" />
                        
                        <p className="text-base text-justify">{news.details}</p>
                    </div>
                    {/* Sidebar */}
                    <div className=" col-span-1">
                        <RightNavbar />
                    </div>
                </div>
            </div>
       </>
    );
};

export default NewsDetails;
