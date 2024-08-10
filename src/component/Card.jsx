import React from 'react';
import { Link } from 'react-router-dom';

function Card({src,title,detail,btntext,navigateto}) {
  return (
    <>
      <div className="card_map">
        <div className="img_hodler"><img src={src} alt={title} /></div>
        <h2>{title}</h2>
        <p>{detail}</p>
        <Link to={navigateto}>{btntext}</Link>
      </div>
    </>
  )
}

export default Card;
