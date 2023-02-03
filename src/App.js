import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import CantactMe from "./layout/CantactMe"
import Project from "./components/Project";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Nav from "./layout/Nav";
import { AnimatePresence } from "framer-motion";
function App() {

  return (
      <>
      <Nav/>
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="project" element={<Project />} />
        <Route path="skills" element={<Skills />}/>
        <Route path="profile" element={<Profile />} />
      </Routes>
      </AnimatePresence>
      <CantactMe/>
    </>
  );
}

export default App;
