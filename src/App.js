import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import CantactMe from "./layout/CantactMe"
import Project from "./components/Project";
import PortfolioSub from "./components/Portfolio_sub/PortfolioSub";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
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
        <Route path="/project" element={<Project />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
          <Route path="portfoliosub" element={<PortfolioSub />}/>
          <Route path="1" element={<Project1 />}/>
          <Route path="2" element={<Project2 />}/>
          <Route path="3" element={<Project3 />}/> 
      </Routes>
      </AnimatePresence>
      <CantactMe/>
    </>
  );
}

export default App;
