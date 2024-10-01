import React from 'react';
import Header from '../Shared/Header/Header';
import Navabar from '../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    return (
                <>
                          <Header></Header>
                           <Navabar></Navabar>
                        <div className=''>
                            <h2   className='text-3xl text-left'>About Dragon News </h2>
                            <p className='text-lg text-start p-10'>
                            Welcome to Dragon News, your premier source for reliable, up-to-date news that brings you closer to the stories that shape our world. At Dragon News, we believe in the power of information to inform, inspire, and ignite positive change. Our mission is simple: to deliver news that matters—fast, accurate, and impartial.

                Founded with the vision of becoming a trusted platform, Dragon News is committed to journalistic excellence. Our team of seasoned reporters and editors work around the clock to provide you with the latest headlines and in-depth analysis on a wide range of topics. From breaking news and politics to business, technology, entertainment, sports, and more, we cover the stories that impact your life, your community, and the global stage.

                We take pride in our commitment to truth and transparency. In a world where misinformation spreads easily, Dragon News strives to uphold the highest standards of integrity in our reporting. We verify every story, cite credible sources, and maintain a balanced perspective, ensuring that you get the full picture, no matter the issue. Our readers deserve nothing less than the truth, and we work tirelessly to deliver just that.

                At Dragon News, we know that the way people consume news is constantly evolving. That’s why we’re dedicated to keeping up with the latest digital trends, offering a seamless and user-friendly experience across all devices. Whether you’re reading from your desktop, smartphone, or tablet, you can count on Dragon News to provide you with a smooth and engaging browsing experience.

                In addition to daily news updates, we provide feature articles, opinion pieces, and interviews with thought leaders across various industries. Our goal is to give you not just the headlines but also the context behind the news, so you can make informed decisions and engage meaningfully in the conversations that matter most.

                Thank you for choosing Dragon News as your go-to source for trustworthy news. We’re honored to be part of your daily routine, and we look forward to keeping you informed for years to come. Stay tuned and stay informed with Dragon News—where news takes flight.
                            </p>
                        </div>
                        <Footer></Footer>
                </>
    );
};

export default About;