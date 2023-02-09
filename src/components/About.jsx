import React from "react";
import girl from '../assets/img/about-girl.svg';
import back from '../assets/img/backgrounds/about.svg';

const About = () => {
    return <div className="about" id="about">
        <div className="title">
            <h2>Sobre <span className="italic">Ticoy</span></h2>
            <img src={back} alt="diseño" />
        </div>
        <img className="girl" src={girl} alt="girl" />
        <div>
            <h3>¿Quién esta detrás de la marca?</h3>
            <p>
                Detrás de la marca estoy solo yo, Marina, Diseñadora de Indumentaria y Tec. en 
                RRHH. Me encargo de buscar precio, proovedores, realizar compras, retirar los 
                pedidos, sacar fotos, manejo de Instagram, ventas, <span className="bold">amo mi emprendimiento.</span>
            </p>
        </div>
        <div>
            <h3>¿Qué significa Ticoy?</h3>
            <p>
                <span className="bold">Ticoy</span> es un nombre, las personas llamadas asi se caracterizan por 
                ser dinámicas, emprendedoras, comunicativas y salientes. Alegres, optimistas y&nbsp;
                <span className="bold">portadoras de buen humor.</span>
            </p>
        </div>
        <div>
            <h3>¿Cómo nació el emprendimiento?</h3>
            <p>
                El emprendimiento nació literalmente de un día para el otro. Tenía algo de dinero 
                ahorrado, y me dije, a emprender !. Vi una posibilidad en este mundo de joyas, 
                particularmente porque a mi siempre me gustó <span className="bold">VER y COMPRAR.</span>&nbsp;
                Siempre creí que era el <span className="italic">complemento de cualquier look</span>, el detalle que no podía 
                faltar. Y si yo lo creía así, de seguro que <span className="italic">muchas mujeres pensarían igual</span>.
            </p>
        </div>
    </div>
}

export default About;