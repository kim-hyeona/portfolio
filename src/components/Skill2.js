import SkillGo from "./SkillGo";
import SkillLoding from "./SkillLoding";

function Skill2({ skills }) {
    return (
        <>
        <div style={{paddingTop:"30px"}}>
            <span>FIGMA&POTOSHOP</span>
            <SkillGo/>
            <div className="txtbox">
                    <ul>
                        <li>"간단한 이미지 편집과 UI / UX 디자인</li>
                        <li>프로토타입 제작</li>
                    </ul>
                </div>
        </div>
        { skills.map((item) => 
            <div key={item.id}>
            <span>{item.title}</span>
                <SkillLoding/>
                <div className="txtbox">
                    <ul>
                        <li>{item.contents1}</li>
                        <li>{item.contents2}</li>
                        <li>{item.contents3}</li>
                        <li>{item.contents4}</li>
                    </ul>
                </div>
        </div>
        ) }


        </>
    );
}

export default Skill2;