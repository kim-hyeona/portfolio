import React from 'react';
import "./layout.scss"
import { Routes,  Route,  Link  } from "react-router-dom";
import Profile from '../components/Profile';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Main from './Main';

function Nav(props) {
    const path = process.env.PUBLIC_URL;

    return (
        
        <nav>
            <Routes>
                <Route path='/' element={Main}></Route>
                <Route path='project' element={Project}></Route>
                <Route path='skills' element={Skills}></Route>
                <Route path='profile' element={Profile}></Route>
            </Routes>

            <h1><Link to ="/"><img src={path+'/images/logo_black.png'} alt="My Image"/></Link></h1>
           
            <ul>
                <li>
                    <Link to="porject">PORJECT</Link>
                </li>
                <li>
                    <Link to="skills">SKILLS</Link>
                </li>
                <li>
                    <Link to="profile">PROFILE</Link>
                </li>
            </ul>

            <div className='nav_github'>
            <a  href="https://github.com/kim-hyeona" target="_blank"> GITHUB</a><img src={path+'/images/github_logo.png'} alt="githubGO" />
            </div>
        </nav>
    );
}

export default Nav;