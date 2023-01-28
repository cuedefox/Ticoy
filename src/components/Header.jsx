import React from "react";
import back from "../assets/img/backgrounds/inicio.png";
import logo from "../assets/img/logo.svg";
import anillo from "../assets/img/productos/anillo.png"
import anillo2 from "../assets/img/productos/anillo2.png"

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
            <img src={anillo} alt="anillo" className="anillo"/>
            <img src={anillo2} alt="anillo dorado" className="anilloDorado" />
        </div>
    </div>
    )
}

export default Header;