import React from 'react';

function SkillLoding({ skills }) {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="skills_var">
            <div className="run8bit"></div>
            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
            <ul>
               <li className="loding"></li>
            </ul>
        </div>
    );
}

export default SkillLoding;