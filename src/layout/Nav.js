import React from 'react';
import "./layout.scss"
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";


function Nav(props) {
    const path = process.env.PUBLIC_URL;
    const menu = [
        {id:1,title:"PROJECT"},
        {id:2,title:"SKILLS"},
        {id:3,title:"PROFILE"},
    ]
    return (
        <nav>
            <h1><img src={path+'/images/logo_black.png'} alt="My Image"/></h1>
            <ul>
                {menu.map((item)=> <li><Link>{item.title}</Link></li>)}
            </ul>
            
            <div className='nav_github'>
            <a  href="http://" target="_blank" rel="noopener noreferrer"> GITHUB</a><img src={path+'/images/github_logo.png'} alt="githubGO" />
            </div>
        </nav>
    );
}

export default Nav;