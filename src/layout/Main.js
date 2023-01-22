import Profile from "../components/Profile"
import Project from "../components/Project";
import Skills from "../components/Skills"
import "./layout.scss"

function Main(props) {
    return (
        <div>
            <Project/>
            <Skills/>
            <Profile/>
        </div>
    );
}

export default Main;