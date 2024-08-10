import React from 'react';
import Card from '../Card';
import cardimg from '../../../public/images/cardone.jpg'
const Home = ({ message }) => {
    return (
        <div className='main-home'>
            <h2>Home Page</h2>
            <p>{message}</p>
            <Card
            src={cardimg}
            title="Its card heading"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, veritatis!"
            btntext="Read More"
            navigateto="/about"
            />
        </div>
    );
};

export default Home;
