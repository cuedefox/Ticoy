import React from "react";
import whatsapp from '../assets/img/whatsapp.svg';

const WhatsappBut = () => {
    const cargarImagen = require.context("../assets/imgitem", true);
    return <>
        <a href=""><img src={cargarImagen(`./${whatsapp}`)} alt="" /></a>
    </>
}

export default WhatsappBut;