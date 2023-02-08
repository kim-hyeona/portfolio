import React from 'react';
import "./PortfolioSub.scss"

const path = process.env.PUBLIC_URL;

function PortfolioSub(props) {
    return (
        <div className='portfolio_sub'>
                <h2>포트폴리오 제작 일정</h2>
                <div className='goals'>
                    <h3># 목표 ! </h3>
                    <dl>
                        <dd>🤍 단순한 포트폴리오 페이지느낌보다는 하나의 사이트처럼 구성하기</dd>
                        <dd>🤍 사용자의 편의를 고려한  ui / ux 디자인하기</dd>
                    </dl>
                </div>
        <article>
            <div className='directory'>
            <h3># 디렉토리 구조</h3>
                <ul>
                    <li>📂 build </li>
                    <li>📂 node_modules</li>
                    <li>📂 pubilc
                        <ul>
                            <li>📂images</li>
                            <li>📂DB</li>
                        </ul>
                    </li>
                    <li>📂 src
                        <ul>
                            <li>📁assets
                                <ul>
                                    <li>📁 style
                                        <ul>
                                            <li>📄reset.css //리셋</li>
                                            <li>📄module.css //공통의 꾸밈 값</li>
                                        </ul>
                                    </li>
                                    <li>📁 fonts</li>
                                </ul>
                            </li>
                            <li>📂 components
                                <ul>
                                    <li>📂 Portfolio_sub
                                        <ul>
                                            <li>📝PortfolioSub.js</li>
                                            <li>📝PortfolioSub.scss</li>
                                        </ul>
                                    </li>
                                    <li>📝Project.js</li>
                                    <li>📝Project1.js</li>
                                    <li>📝Project2.js</li>
                                    <li>📝Project3.js</li>
                                    <li>📝Project.scss</li>
                                    <li>📝ProjectSub.js</li>
                                    <li>📝ProjectSub.scss</li>
                                    <li>📝Skills.js</li>
                                    <li>📝Skill1.scss</li>
                                    <li>📝Skill2.js</li>
                                    <li>📝SkillGo.js</li>
                                    <li>📝Profile.js</li>
                                    <li>📝Profile.scss</li>
                                </ul>
                            </li>
                            <li>📂 layout
                                <ul>
                                    <li>📝Nav.js</li>
                                    <li>📝Main</li>
                                    <li>📝CantactMe.js</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>📂 package-lock.json</li>
                    <li>📂 package.json</li>
                </ul>
            </div>
            <div className='text_box'>

                <div className='skill_used'>
                <h3># 사용기술</h3>
                    <dl>
                        <dd> <strong>🔧 UI Library :</strong>  React / react-router-dom</dd>
                        <dd> <strong>🔧 DB :</strong> JSON</dd>
                        <dd> <strong>🔧 Tool :</strong> GitHub , Visual Studio Code , Figma</dd>
                    </dl>
                </div>

            <div className='page'>
                <h3># 페이지 구성</h3>
                <p>PROJECT | SKILLS | PROFILE</p>
                <dl>
                    <dt>💡레이아웃: </dt>
                    <dd> - 네비게이션: router를 이용하여 네비게이션 설정</dd>
                    <dd> - cantact me: 따로 컴포넌트를 만들어서 app.js파일에 넣어놓아  <br /> 어느 페이지에서나 메일을 보낼 수 있게 하였다 </dd>
                </dl>
                <dl>  
                    <dt>💡PROJECT: </dt>
                    <dd> -  useEffect, useRef, useState 등의 훅을 이용하여  <br /> 슬라이드를 구현하는 방법으로 프로젝트 나열</dd>
                </dl>
                <dl>
                    <dt>💡SKILLS: </dt>
                    <dd> -  useEffect, useRef, useState 등의 훅을 이용하여 <br /> 
                    슬라이드와 스크롤을 내리면 이벤트를 줌 </dd>
                    <dd> - CSS5 애니메이션으로 꾸밈요소를 줌 </dd>
                </dl>
            </div>

            
            </div>
            <div className='issue'>
                <h3># 문제 및 해결</h3>
                <dl>
                    <dt>⚠️ 슬라이드 구현</dt>
                    <dd><strong>❗️ 문제: </strong> <br /> 클릭하면 영역이 확장되는 구조의 슬라이드를 작업했으나 인덱스 번호 0의 슬라이드를 클릭하면 1번 슬라이드에서 이벤트가 발생하는 오류가 있었다.</dd>
                    <dd><img src={path + "/images/issue2.png"} alt="img" /></dd>
                    <dd><strong>✔️ 해결방법: </strong> <br /> position설정을 pixed에서 absolute로 변경하여 클릭하면 나타는 컨텐츠들이 각각의 슬라이드를 기준으로 이동하도록 바꾸었고 해결되었다! </dd>
                    <dd><img src={path + "/images/issue2_2.png"} alt="img" /></dd>
                </dl>
                <dl>
                    <dt>⚠️ 배포 중 일부 요소가 안보이는 문제</dt>
                    <dd><strong>❗️ 문제: </strong> <br /> 자식컴포넌트들이 배포된 화면에서는 안보이는 오류가 생겼다. </dd>
                    <dd><img src={path + "/images/issue1_3.png" } alt="img" /><img src={path + "/images/issue1_4.png" } alt="img" /></dd>
                    <dd></dd>
                    <dd><strong>✔️ 해결방법: </strong> <br /> 안보이는 요소들이 map()을 이용해서 json 파일을 출력하여 만든 요소들이였다 json 파일 링크를 배포용으로 바꾸니 해결 되었다!</dd>
                    <dd><img src={path + "/images/issue1_2.png"} alt="img" /></dd>
                    <dd><img src={path + "/images/issue1.png"} alt="img" /></dd>
                </dl>
            </div>
        </article>
    </div>
    );
}

export default PortfolioSub;