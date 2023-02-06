import React from 'react';
import "./MailForm.scss"

function MailForm(props) {
    return (
        <div className='cantact_form'>
            <h4>Thank you ♥</h4>
        <form method='POST'
            action='https://script.google.com/macros/s/AKfycbzwQp2O6XbK0i79AnjtLfo9AGi-jVLMv--vmq9A-0XoR2p0ij1LkJwH0HakFdTx-5x1kA/exec'
            target='frAttachFiles'
            data-emil='kimha9@naver.com'
            >
            <label htmlFor="user">이름</label>
            <input type="text" className='userName' id='user' name='usr' />
            <br/>
            <label htmlFor="adr">연락처</label>
            <input type="text" className='userName' id='adr' name='adrrs' />
            <br />
            <label htmlFor="main">문의하실 내용</label>
            <textarea type="text" className='userName' id='main' name='main' />
            <br />
            <button type='submit' className='mailBtn'>전송</button>
        </form>
        <iframe name='frAttachFiles' style={{dislay:"none"}}></iframe>
        </div>
    );
}

export default MailForm;