import "./layout.scss"
import Star2 from './Star2';
import Star from './Star';
import { Link } from "react-router-dom";

function Nav(props) {
    const path = process.env.PUBLIC_URL;

    return (
       <nav>
            <h1><Star/> <Link to="/"><img className='logo' src={path+'/images/logo_black.png'} alt="My Image"/></Link><Star2/></h1>
            
            <ul>
               <li>
                <Link to="/project">PROJECT</Link>
               </li>
               <li>
                <Link to="/skills">SKILLS</Link>
               </li>
               <li>
                <Link to="/profile">PROFILE</Link>
               </li>
            </ul>
            <div className='nav_github'>
            <Star/>
            <a  href="https://github.com/kim-hyeona" target="_blank">GITHUB</a><img src={path+'/images/github_logo.png'} alt="githubGO" />
            <Star2/>
            </div>
        </nav>
    );
}

export default Nav;