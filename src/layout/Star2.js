import React from 'react';
import "./layout.scss"

function Star2(props) {
  const path = process.env.PUBLIC_URL;
    return (
        <div className='star2 star'>
          <img src={path + 'images/black_star1.png'} alt="." />
          <img src={path + 'images/black_star1.png'} alt="." />
        </div>
    );
}



export default Star2;