import Card from '../Card';
import cardimg from '../../../public/images/card-2.jpg'
import React, { useState, useEffect } from 'react';

const ProductList = ({ adds }) => {
    const [addList, setAddList] = useState([]);

    useEffect(() => {
        setAddList(adds);
    }, [adds]);

    return (
        <>
        <div className='main-home-1'>
            <div className="se-lis">
                <h2>Quick Adds</h2>
            </div>
        </div>
            <div className="sec-listing">
                    {addList.map((add, index) => (
                        <div className='adds' key={index}>
                        <img src={add.src} alt="" />
                        
                        </div>
                    ))}
            </div>
            <Card
            src={cardimg}
            title="The Product is a camera"
            detail="this is dslr camera, this product is very good"
            navigateto="/about"
            />
            </>
    );
};

export default ProductList;
