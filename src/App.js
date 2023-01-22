import Nav from "./layout/Nav"
import Main from "./layout/Main"
import CantactMe from "./layout/CantactMe"
import {  BrowserRouter } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <Main/>
    <CantactMe/>
    </BrowserRouter>
  );
}

export default App;
