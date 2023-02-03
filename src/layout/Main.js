import Profile from "../components/Profile"
import Project from "../components/Project";
import Skills from "../components/Skills"

import "./layout.scss"

function Main({children}) {
    return (
        <>
           <Project/>
           <Skills/>
            <Profile/>
        </>
    );
}

export default Main;