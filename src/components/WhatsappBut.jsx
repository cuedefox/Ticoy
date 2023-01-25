import React from "react";
import whatsapp from '../assets/img/whatsapp.png';

const WhatsappBut = () => {
    return <>
        <a href="https://api.whatsapp.com/send?phone=5493543552282" target="_blank" rel="noreferrer"><img className="but-whatsapp" src={whatsapp} alt="" /></a>
    </>
}

export default WhatsappBut;