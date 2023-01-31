import "./layout.scss"
import Star2 from './Star2';
import Star from './Star';


function Nav(props) {
    const path = process.env.PUBLIC_URL;

    return (
       <nav>
            <h1><Star/><img className='logo' src={path+'/images/logo_black.png'} alt="My Image"/><Star2/></h1>
            
            <ul>
                <li>PORJECT</li>
                <li>SKILLS</li>
                <li>PROFILE</li>
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