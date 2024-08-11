import React from 'react';
import Card from '../Card';
import cardimg from '../../../public/images/cardone.jpg'
const Home = ({ message }) => {
    return (
        <div className='main-home'>
            <div className='abcd'>
            <h2>Home Page</h2>
            <p>{message}</p>
            </div>
            <Card
            src={cardimg}
            title="Its card heading"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, veritatis!"
           
            navigateto="/about"
            />
        </div>
    );
};

export default Home;
