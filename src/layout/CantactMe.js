import "./layout.scss"

function CantactMe(props) {

    const path = process.env.PUBLIC_URL;
    return (

            <a  className='cantact_me' href="mailto:kimha9@naver.com">
                <img src={path+'/images/contactme.png'} alt="cantact_me"/>
            </a>

        
        );
}

export default CantactMe;