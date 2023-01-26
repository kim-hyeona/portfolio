import React, { useEffect, useRef, useState } from 'react';
import "./Skills.scss"


function Skills(props) {
    const path = process.env.PUBLIC_URL;
    
    const [presentSlide, setpresentSlide] = useState(0);
    const slideRef = useRef(null);
    const TOTAL_SLIDES = 1;

    const nextSlide = () => { //<
    if (presentSlide >= TOTAL_SLIDES) {
      setpresentSlide(presentSlide - 1);
    }
  };
  const prevSlide = () => { //>
    if (presentSlide === 0) {
      setpresentSlide(presentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.7s ease-in-out";
    slideRef.current.style.transform = `translateX(-${presentSlide}00%)`;
  }, [presentSlide]);

    return (
        <article className='skills'>
            <h2>SKILLS</h2>
            <button onClick={prevSlide}><img src={path+'/images/arrow2.png'} alt=">" /></button>
            <button onClick={nextSlide}><img src={path+'/images/arrow1.png'} alt="<" /></button>
            <div className="skliis_cantainer" >
                <div className="skills_wrapper" ref={slideRef} >
                    <div className="skills_silde" >
                    <div className='html'>
                        <span>THML & CSS</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div> 
                       
                        <div className="txtbox">
                            <ul>
                                <li>웹 접근성을 고려하고 콘텐츠 내용에 적합한 태그를 사용한 마크업 작업</li>
                                <li>웹 사이트 디자인</li>
                                <li>애니메이션과 트랜지션을 이용한 간단한 움직임 구현</li>
                                <li>미디어 쿼리를 이용한 반응형 웹 구현</li>
                            </ul>
                        </div>
                    </div>


                    <div className='react'>
                        <span>REACT</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        
                         <div className="txtbox">
                            <ul>
                                <li>함수 컴포넌트와 HOOK을 이용하여 UI 제작</li>
                                <li>스크롤/클릭 이벤트와 애니메이션 구현</li>
                                <li>OPEN API 활용</li>
                            </ul>
                        </div>
                    </div>


                    <div className='js'>
                        <span>JAVASCRIPT</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                         <div className="txtbox">
                            <ul>
                                <li>다채로운 스크롤 / 클릭 이벤트와 애니메이션 구현</li>
                            <li>사용자가 이용할 대부분의 기능 구현</li>
                            <li>OPEN API 사용</li>
                            </ul>
                        </div>
                    </div>


                    <div className='git'>
                        <span>GIT & GITHUB</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                         <div className="txtbox">
                            <ul>
                                <li>GITHUB를 이용한 버전 관리와 협업</li>
                                <li>프로젝트 버전 관리</li>
                            </ul>
                        </div>
                    </div>

                    </div>
                    <div className="skills_silde">
                    <div className='figma'>
                        <span>FIGMA <br/> &PHOTOSHOP</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                         <div className="txtbox">
                            <ul>
                                <li>간단한 이미지 편집과 UI / UX 디자인</li>
                                <li>프로토타입 제작</li>
                            </ul>
                        </div>
                        </div>

                        <div className='git'>
                        <span>LODING...</span>
                        
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            
                        </div>

                         <div className="txtbox">
                            <ul>
                                <li>공부중입니다!!</li>
                            </ul>
                        </div>
                    </div>

                    <div className='git'>
                        <span>LODING...</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                         <div className="txtbox">
                            <ul>
                                <li>공부중입니다!!</li>
                            </ul>
                        </div>
                    </div>

                    <div className='git'>
                        <span>LODING...</span>
                        <div className="skills_var">
                            <img className='run8bit' src={path+'/images/run1.png'} alt="o<-<" />
                            <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                         <div className="txtbox">
                            <ul>
                                <li>공부중입니다!!</li>
                            </ul>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </article>
    );
}

export default Skills;