import React from "react";
import back from "../assets/img/backgrounds/inicio.png";
import logo from "../assets/img/logo.svg";
import inicio from "../assets/img/productos/inicio.jpg"
import borde from "../assets/img/borde.png"
const Header = () => {
    const stylesBack = {
        backgroundImage: `url(${back})`,
    }

    return (
    <div className="header" style={stylesBack} id="header">

        <div className="principal">

            <div className="logo">
            <img src={logo} alt="logo principal" className="logoHeader"/>
            </div>

            <div className="catalogo">
                <h2>Elevá tus outfit con nuestras joyas y sentite única ¡Conocénos!</h2>
                <a href="#products"><button className="botonCatalogo">Ver catálogo</button></a>
            </div>
        </div>

        <div className="imagenesInicio">
            <div className="containerImg">
            <img src={inicio} alt="accesorios" className="inicio"/>
            <img src={borde} alt="rectangulo" className="borde"/>
            </div>
        </div>
    </div>
    )
}

export default Header;