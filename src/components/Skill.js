function Skill({ skills }) {
    const path = process.env.PUBLIC_URL;
    
    return (
        <>
        { skills.map((item) => 
            <div key={item.id} className={item.calss}>
          <span>{item.title}</span>
          <div className="skills_var">
                    <img className='run8bit' src={path+'/images/run2.png'} alt="o<-<" />
                    <img className='cookie8bit' src={path+"/images/cookie_run.png"} alt="cookieimg" />
                    <ul>
                        <li></li>
                    </ul>
                </div>
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

export default Skill;