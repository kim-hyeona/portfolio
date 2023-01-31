import React, { useEffect, useRef } from 'react';

function SkillGo(props) {
    const path = process.env.PUBLIC_URL;

  const targetRef = useRef(null);  
  const handleScroll = () => {
    console.log("scrolling");
    
    if (window.scrollY > 0) {
      targetRef.current.style.width = "65%";      
    }
  };

  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 2000);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div className="skills_var">
            <ul>
               <li ref={targetRef}></li>
            </ul>
        </div>
    );
}

export default SkillGo;