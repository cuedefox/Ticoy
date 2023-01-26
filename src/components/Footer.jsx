import React from "react";
import igLogo from "../assets/img/ig-logo.svg";

const Footer = () => {
    return <footer>
        <div className="sections">
            <div>
                <div className="nav-footer">
                    <ul>
                        <li><a href="#header">Inicio</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li><a href="#faq">Preguntas frecuentes</a></li>
                        <li><a href="#about">Sobre ticoy</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                <div className="contacto-footer">
                    <h5>Contactános</h5>
                    <ul>
                        <li>+54 3543 55-2282</li>
                        <li>-----@gmail.com</li>
                        <li>Solo venta online.</li>
                    </ul>
                </div>
                <div className="redes-footer">
                    <h5>Redes Sociales</h5>
                    <div>
                        <a href="https://www.instagram.com/ticoy.joyas/" target="_blank" rel="noreferrer"><img src={igLogo} alt="Instagram de Ticoy" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy">
            <p>Copyright Ticoy Joyas - 2023. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos&nbsp;<a href="https://www.instagram.com/ticoy.joyas/">ingrese aquí</a>.</p>
        </div>
    </footer>
}

export default Footer;