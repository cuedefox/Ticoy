import React from "react";
import igLogo from "../assets/img/ig-logo.svg";
import wspLogo from "../assets/img/whatsapp-logo.svg";
import backContact from "../assets/img/backgrounds/contacto.svg"
const Contact = () => {
    const stylesBack = {
        backgroundImage: `url(${backContact})`,
    }
    return (
        <div className="contact" id="contact" style={stylesBack}>
            <h2>Contacto</h2>
            <div className="containerContact">

                <div className="instagram">
                    <div className="igRedes">
                        <a href="https://www.instagram.com/ticoy.joyas/" target="_blank" rel="noreferrer"><img src={igLogo} alt="Instagram de Ticoy" /></a>
                        <h3>ticoy.joyas</h3>
                    </div>
                    <div className="igBtn">
                        <p>Estamos en instagram</p>
                        <a href="https://www.instagram.com/ticoy.joyas/" target="_blank" rel="noreferrer"><button>SEGUINOS</button></a>
                    </div>
                </div>

                <div className="whatsapp">
                    <div className="wspRedes">
                        <a href="https://api.whatsapp.com/send?phone=5493543552282" target="_blank" rel="noreferrer"><img src={wspLogo} alt="whatsapp de ticoy" /></a>
                        <h3>Whatsapp</h3>
                    </div>
                    <div className="wspBtn">
                        <p>¿Necesitas ayuda?</p>
                        <a href="https://api.whatsapp.com/send?phone=5493543552282" target="_blank" rel="noreferrer"><button>ESCRIBINOS</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;