import React from "react";
import whatsapp from '../assets/img/icons-footer/whatsapp.svg';
import ubicacion from '../assets/img/icons-footer/ubicacion.svg';

const Footer = () => {
    return <footer>
        <div className="sections">
            <div>
                <div className="nav-footer">
                    <ul>
                        <li><span className="bold">Categorías</span></li>
                        <li><a href="#header">Inicio</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li><a href="#faq">Preguntas frecuentes</a></li>
                        <li><a href="#about">Sobre ticoy</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                <div className="contacto-footer">
                    <h5><span className="bold">Contactános</span></h5>
                    <ul>
                        <li>
                            <img src={whatsapp} alt="" />
                            <p>+54 3543 55-2282</p>
                        </li>
                        <li>
                            <img src={ubicacion} alt="" />
                            <p>Salsipuedes, Córdoba.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copy">
            <p>Copyright Ticoy Joyas - 2023. Todos los derechos reservados. Defensa de las y los consumidores.</p>
        </div>
    </footer>
}

export default Footer;