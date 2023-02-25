import React from 'react';
import { useRouter } from 'next/router';

const Modal = ({ changeModal }) => {

    const router = useRouter()

    return (
        <>
            <div className='Modal'>
                {router.locale == "en" ?
                    <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1> : router.locale == "ru" ? <h1>СПАСИБО 3A ОБРАЩЕНИЕ &#128522;</h1> : <h1>MUROJAATINGIZ UCHUN TASHAKKUR &#128522;</h1>
                }
                <button onClick={() => changeModal()}>OK</button>
            </div>
            <div className="contrast" onClick={() => changeModal()}></div>
        </>
    );
};

export default Modal;