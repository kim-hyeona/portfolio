import "./Project.scss"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ProjectSilde({ project }) {


    const [isOpen, setMenu] = useState(false);
     
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); 
    }

    return (
        <>
        {project.map((item) => <div className={isOpen ? "silde_active" : "silde"}>
        <h5>{item.title}</h5>
            <div onClick={()=>toggleMenu()} className={isOpen ? "sildeBtn_active" : "sildeBtn"}>
            </div>

            <div className="closeBtn">
            </div>

                <div className={isOpen ? "sildeIn_active" : "sildeIn"}>
                <div className="btns">
                    <div className="gitBtn"><a href=""></a></div>
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
                            <Link>{item.link}</Link>
                        </div>
                </div>
                </div>
        </div>
        ) }
        
    </>
    );
} 

export default ProjectSilde;