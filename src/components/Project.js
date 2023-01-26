import React, { useEffect, useRef, useState } from 'react';
import "./Project.scss"

function Project() {
    const path = process.env.PUBLIC_URL;

    const [presentSlide, setpresentSlide] = useState(0);
    const slideRef = useRef(null);
    const TOTAL_SLIDES = 5;

  const nextSlide = () => { // >
    if (presentSlide >= TOTAL_SLIDES) {
      setpresentSlide(4);
    } else {
      setpresentSlide(presentSlide + 1);
    }
  };
  const prevSlide = () => { // <
    if (presentSlide === 0 ) {
      setpresentSlide(1);
    } else {
      setpresentSlide(presentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${presentSlide}00%)`;
  }, [presentSlide]);
    
    return (
        <article className='project'>
            <h2>PROJECT</h2>
            <button onClick={nextSlide} ><img src={path+'/images/arrow1-2.png'} alt="<" /></button>
            <button onClick={prevSlide}><img src={path+'/images/arrow1-1.png'} alt=">" /></button>
                <div className='silde_wrapper' ref={slideRef} >
                    <div className='silde'>1JAVASCRIPT<p>READ MORE</p></div>
                    <div className='silde'>2REACT1<p>READ MORE</p></div>
                    <div className='silde'>3REACT2<p>READ MORE</p></div>
                    <div className='silde'>4JAVASCRIPT<p>READ MORE</p></div>
                    <div className='silde'>5REACT1<p>READ MORE</p></div>
                    <div className='silde'>6REACT2<p>READ MORE</p></div>
                </div>
        </article>
    );
}

export default Project;