import SkillGo from "./SkillGo";


function Skill2({ skills }) {
    return (
        <>
        { skills.map((item) => 
            <div key={item.id}>
                <SkillGo/>
                <span>{item.title}</span>
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