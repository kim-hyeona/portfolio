import React from 'react';
import "./Project2.scss"

const path = process.env.PUBLIC_URL;
function Project2(props) {
    return (
        <div className='porject2' style={{width:"100%"}}>
            <h2>PROJECT2</h2>
                <div className="project_box">
                <video src={path + "/images/potster_project1.mp4" } controls autoPlay muted/>
                </div>
            
        </div>
    );
}

export default Project2;