import "./Project.scss"
import React from 'react';
import { Link } from "react-router-dom";

function ProjectSilde({ project }) {

    return (
        <>
        {project.map((item) => <div className='silde active'>
        <h5>{item.title}</h5>
            <div className="sildeBtn">
            {item.raedmore}
            </div>

            <div className="closeBtn">
            </div>

                <div className="sildeIn active">
                <div className="btns">
                    <div className="gitBtn"><a href=""></a></div>
                    <div className="inCloseBtn"></div>
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