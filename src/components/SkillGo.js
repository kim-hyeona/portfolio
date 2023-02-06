import React, { useEffect, useRef } from 'react';
import Skills from './Skills';

function SkillGo(props) {
    const path = process.env.PUBLIC_URL;

  const targetRef = useRef(0);
  
  const handleScroll = () => {
    console.log(window.scrollY);
    
    if (window.scrollY >= 0) {
      targetRef.current.style.width = "40%";      
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 500);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const runRef = useRef(null);  
  const handleScrollRun = () => {
    
    if (window.scrollY > 0) {
      runRef.current.style.marginLeft = "40%";      
    }
  };
  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScrollRun);
    }, 500);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScrollRun);
    };
  }, []);

    return (
        <div className="skills_var">
            <div className="run8bit" ref={runRef}></div>
            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
            <ul>
               <li className='var' ref={targetRef}></li>
            </ul>
        </div>
    );
}

export default SkillGo;