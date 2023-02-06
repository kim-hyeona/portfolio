import { useState } from "react";
import "./layout.scss"
import "./MailForm.scss"

function CantactMe(props) {
    const [isShow, setIsShow] = useState(false);

    const toggleCantact = () => {
        setIsShow(isShow => !isShow);
    }

    const [name, setIsName] = useState('');
    const [adrss, setIsAdrss] = useState('');
    const [main, setIsMain] = useState('');

    const nameHandler =(e) => {
        setIsName(e.target.value);
    }
    const adrssHandler =(e) => {
        setIsAdrss(e.target.value);
    }
    const mainHandler =(e) => {
        setIsMain(e.target.value);
    }

    const btnHandler = (e) => {
        e.prevenDefult();

        setIsName();
        setIsAdrss();
        setIsMain();
    }

    const path = process.env.PUBLIC_URL;
    return (           
        <div>
            <a  onClick={()=>toggleCantact()} className='cantact_me'>
                <img src={path+'/images/contactme.png'} alt="cantact_me"/>
            </a>
            

            <div className={isShow ? "open_cantact" : "hide_cantact"}>
            <h4>Thank you ♥</h4>
            <div className="close_btn" onClick={()=>toggleCantact()}>x</div>
        <form
            onSubmit={btnHandler}
            method='POST'
            action='https://script.google.com/macros/s/AKfycbwMZ-IdgdoFliWVCeemlHc3g4nOvlLY0UqxFEDS-rX4-mrwkPzKHLoOFVOJDXE-l7rlTw/exec'
            target='frAttachFiles'
            data-emil='kimha9@naver.com'
            >
            <label htmlFor="user">이름:</label>
            <input type="text" value={name} onChange={nameHandler} className='userName' id='user' name='usr' />
            <br/>
            <label htmlFor="adr">연락처:</label>
            <input type="text" value={adrss} onChange={adrssHandler} className='userName' id='adr' name='adrrs' />
            <br />
            <div className="main">
                <label htmlFor="main">문의하실 내용</label>
                <textarea type="text" value={main} onChange={mainHandler} className='userName' id='main' name='main' />
            </div>
            <button type='submit' className='mailBtn'>전송!</button>
        </form>
        <iframe name='frAttachFiles' style={{dislay:"none"}}></iframe>
        </div>
        </div>
        );
}

export default CantactMe;