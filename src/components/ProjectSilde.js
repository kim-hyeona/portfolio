import "./Project.scss"
import React from 'react';
import { Link } from "react-router-dom";

function ProjectSilde(props) {
const path = process.env.PUBLIC_URL;

function readMore(){

}
    return (
        <>
        <div className='silde active'>
            <h5>제목</h5>
            <div className="sildeBtn">
                RAED MORE
            </div>

            <div className="closeBtn">
            </div>

                    <div className="sildeIn active">
                    <div className="btns">
                        <div className="gitBtn"></div>
                        <div className="inCloseBtn"></div>
                    </div>
                        
                            <div className="txtBox">
                                <h4>REACT</h4>

                                    <div className="txt">
                                        <div className="sildebox">
                                            <div>#REACT #REACT #REACT</div>
                                        </div>
                                        <h3>프로젝트 목표</h3>
                                        <p>리액트를 이용하여 사용자가 어떤 디바이스를 사용하던 편하게 이용 할 수 있는 사이트를 구축하고 공부하기</p>
                                        <Link></Link>
                                    </div>
                            </div>
                    </div>
        </div>
    </>
    );
}

export default ProjectSilde;