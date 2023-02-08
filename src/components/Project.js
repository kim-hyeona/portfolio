import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import "./Project.scss"
import axios from "axios";
import ProjectSilde from './ProjectSilde';


function Project() {
    const path = process.env.PUBLIC_URL;

    const [project,setproject] = useState([]);
    const [project2,setproject2] = useState([]);
    const [project3,setproject3] = useState([]);
    const [project4,setproject4] = useState([]);
    const [project5,setproject5] = useState([]);
    const [project6,setproject6] = useState([]);
    useEffect(() => {
      const getData = async () => {
      const projectDataList = await axios.get(path + "/DB/ProjectSilde.json");
      setproject(projectDataList.data.project);
      setproject2(projectDataList.data.project2);
      setproject3(projectDataList.data.project3);
      setproject4(projectDataList.data.project4);
      setproject5(projectDataList.data.project5);
      setproject6(projectDataList.data.project6);
      };
      getData();
    }, []);
 
    const [presentSlide, setpresentSlide] = useState(0);
    const slideRef = useRef(null);
    const TOTAL_SLIDES = 5;/* 6개의 슬라이드가 있음 */

  const nextSlide = () => { // >
    if (presentSlide /* 0 */ >= TOTAL_SLIDES /* 5 */) {
      setpresentSlide(0);
    } else {
      setpresentSlide(presentSlide + 1);
    }
  };
  const prevSlide = () => { // <
    if (presentSlide === 0 ) {
      setpresentSlide(5);
    } else {
      setpresentSlide(presentSlide - 1);
    }
  };



  useEffect(() => {
    slideRef.current.style.transition = "all 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${presentSlide}00%)`;
    // slideRef.current.style.backgroundColor = 'rgba(99,99,99,0.5)'
  }, [presentSlide]);

    return (
      <motion.div  initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <article className='project'>
            <h2>PROJECT <span>.</span> </h2>
            <div className='project_btn' onClick={nextSlide}  ><img src={path+'/images/arrow1-2.png'} alt="<" /></div>
            <div  className='project_btn' onClick={prevSlide} ><img src={path+'/images/arrow1-1.png'} alt=">" /></div>
                <div className='silde_wrapper'  ref={slideRef} >
                    <ProjectSilde project={project}/>
                    <ProjectSilde project={project2}/>
                    <ProjectSilde project={project3}/>
                    <ProjectSilde project={project4}/>
                    <ProjectSilde project={project5}/>
                    <ProjectSilde project={project6}/>
                </div>
        </article>


      </motion.div>
    );
}


export default Project;