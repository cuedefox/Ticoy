import {React, useState } from "react";
import logo from '../assets/img/logonavbar.svg';

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const desplegarMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return <nav>
        <img src={logo} className="logo-nav" alt="logo de Ticoy" />
        <ul className={mobileMenu ? "menu-items menu-items-show" : "menu-items"}>
            <li><a href="#header">Inicio</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#checklist">Cuidados de tus joyas</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
            <li><a href="#about">Sobre ticoy</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="menu-bars" onClick={desplegarMenu}>
            <span className={mobileMenu ? "activelinea1-menu-bar" : "linea1-menu-bar"}></span>
            <span className={mobileMenu ? "activelinea2-menu-bar" : "linea2-menu-bar"}></span>
            <span className={mobileMenu ? "activelinea3-menu-bar" : "linea3-menu-bar"}></span>
        </div>
    </nav>
}

export default NavBar;