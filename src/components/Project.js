import React from 'react';
import "./Profile.scss"
import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"

function Project(props) {
    return (
        <article className='silde_wrapper'>
            <div className='silde'>JAVASCRIPT<p>READ MORE</p></div>
            <div className='silde'>REACT1<p>READ MORE</p></div>
            <div className='silde'>REACT2<p>READ MORE</p></div>
        </article>
    );
}

export default Project;