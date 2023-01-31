import React, { useEffect, useRef, useState } from 'react';
import Skill from './Skill';
import Skill2 from './Skill2';
import "./Skills.scss"
import axios from "axios";
import Star from '../layout/Star';

// json
function Skills() {

    const [skills,setskills] = useState([]);
    const [skills2,setskills2] = useState([]);

    useEffect(() => {
      const getData = async () => {
      const skillDataList = await axios.get("/DB/skills.json");
      setskills(skillDataList.data.skills);
      setskills2(skillDataList.data.skills2);
      };
      getData();
    }, []);



// path
const path = process.env.PUBLIC_URL;

const [presentSlide, setpresentSlide] = useState(0);
const slideRef = useRef(null);
const TOTAL_SLIDES = 1
const nextSlide = () => { //<
  if (presentSlide >= TOTAL_SLIDES) {
    setpresentSlide(presentSlide - 1);
}
  };

// 슬라이드
  const prevSlide = () => { //>
    if (presentSlide === 0) {
      setpresentSlide(presentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${presentSlide}00%)`;
  }, [presentSlide]);



    return (
        <article className='skills'>
            <h2><Star/>SKILLS</h2> 
            <button onClick={prevSlide}><img src={path+ '/images/arrow2.png'} alt=">" /></button>
            <button onClick={nextSlide}><img src={path+ '/images/arrow1.png'} alt="<" /></button>

            <div className="skliis_cantainer" >
                <div className="skills_wrapper" ref={slideRef} >
                  <div className="skills_silde" >
                    <Skill skills={skills}/>
                  </div>
                  <div className="skills_silde">
                    <Skill2 skills={skills2}/>
                  </div>
                </div>
            </div>
        </article>
    );
}

export default Skills;