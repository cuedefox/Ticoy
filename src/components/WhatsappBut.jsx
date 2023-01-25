import React from "react";
import whatsapp from '../assets/img/whatsapp.png';

const WhatsappBut = () => {
    const cargarImagen = require.context("../assets/img", true);
    return <>
        <a href=""><img className="but-whatsapp" src={cargarImagen(`./${whatsapp}`)} alt="" /></a>
    </>
}

export default WhatsappBut;