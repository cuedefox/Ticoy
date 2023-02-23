import React from "react";
import back from "../assets/img/backgrounds/productos.svg";
import anillos from "../assets/img/productos/anillos.jpeg"
import pulseras from "../assets/img/productos/inicio2.jpeg"
import collares from "../assets/img/productos/collares.jpeg"
import aros from "../assets/img/productos/aros.jpeg"
const Products = () => {
    const stylesBack = {
        backgroundImage: `url(${back})`,
    }
    return (
        <div className="productos" style={stylesBack} id="products">
            <div className="tituloProductos">
                <h2>Elegí tu Ticoy favorito</h2>
                <p>Joyas de plata 925, acero quirúrgico plateado y dorado Desde Córdoba a todo el país.</p>
            </div>

            <div className="imagenesProductos">
                <div className="aros">
                    <img src={aros} alt="aros"/>
                    <h3>AROS</h3>
                </div>
                <div className="collares">
                    <img src={collares} alt="collares"/>
                    <h3>COLLARES</h3>
                </div>
                <div className="anillos">
                    <img src={anillos} alt="anillos"/>
                    <h3>ANILLOS</h3>
                </div>
                <div className="pulseras">
                    <img src={pulseras} alt="pulseras"/>
                    <h3>PULSERAS</h3>
                </div>
            </div>
        </div>

    )
}

export default Products;