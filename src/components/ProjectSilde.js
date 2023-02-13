import "./Project.scss"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PortfolioSub from "../components/Portfolio_sub/PortfolioSub";
import Project1 from "../components/ProjectSilde";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";

function ProjectSilde({ project }) {

    const [isOpen, setMenu] = useState(false);
    const path = process.env.PUBLIC_URL;
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); 
    }

    return (
        <>
        {project.map((item) => <div style={{backgroundImage:`url( ${path + item.img})`}} className={isOpen ? "silde_active" : "silde"}>
        <h5>{item.title}</h5>
            <div onClick={()=>toggleMenu()} className={isOpen ? "sildeBtn_active" : "sildeBtn"}>
            </div>
            <div className="closeBtn">
            </div>

                <div className={isOpen ? "sildeIn_active" : "sildeIn"}>
                <div className="btns">
                    <div className="gitBtn"><a href={item.git} target="_blank">.</a></div>
                    <div onClick={()=>toggleMenu()} className="inCloseBtn"></div>
                </div>
                    
                <div className="txtBox">
                <h4>{item.stack}</h4>
                        <div className="txt">
                            <div className="sildebox">
                            <div>{item.move}</div>
                            </div>
                        <h3>{item.title2}</h3>
                        <p>{item.p}</p>
                        <Link to={item.to}>{item.link}</Link>
                        </div>
                </div>
                </div>

                
        </div>
        ) }
        <Routes>
          <Route path="/portfoliosub" element={<PortfolioSub />}/>
          <Route path="/1" element={<Project1 />}/>
          <Route path="/2" element={<Project2 />}/>
          <Route path="/3" element={<Project3 />}/> 
      </Routes>
    </>
    );
} 

export default ProjectSilde;