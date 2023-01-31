import React, { useState } from 'react';
import "./layout.scss"

function CantactMe(props) {

    const [isOpen, setMenu] = useState(false);
    const toggleMenu = (e) => {
        setMenu(isOpen => !isOpen);
    }

    //  
    const path = process.env.PUBLIC_URL;
    return (
        <div>
            <div className={isOpen ? "show-menu" : "hide-menu"}>
                
            </div>
            <img onClick={()=>toggleMenu()} className='cantact_me' src={path+'/images/contactme.png'} alt="cantact_me"/>
        </div>
        
        );
}

export default CantactMe;