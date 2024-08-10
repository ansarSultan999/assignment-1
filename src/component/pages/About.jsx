import Card from '../Card';
import cardimg from '../../../public/images/card-two.jpg'
import React from 'react';

const About = () => {
    return (
        <>
        <div className='main-home'>
            <h2>About Us</h2>
            <p>This is the About page.</p>
            </div>
            <Card
            src={cardimg}
            title="Its About heading"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, veritatis!"
            navigateto="/about"
            />
            </>
    );
};

export default About;
