import React from "react";
import back from "../assets/img/backgrounds/about.png"

const About = () => {
    const stylesBack = {
        position: 'absolute',
        backgroundImage: `url(${back})`,
    }

    return <div className="about" style={stylesBack}>
        <h2>Sobre Ticoy</h2>
        <div>
            <h3>¿Quién esta detrás de la marca?</h3>
            <p>Lorem ipsum dolor sit amet. Eos praesentium molestiae aut ipsa quae ex repellat omnis et dolorum rerum. Sed perspiciatis veritatis aut cumque neque eos assumenda repellat!</p>
        </div>
        <div>
            <h3>¿Qué significa Ticoy?</h3>
            <p>Ticoy es un nombre y las personas llamadas asi se caracterizan por ser dinámicas, emprendedoras, comunicativas y salientes. Alegres, optimistas y portadoras de buen humor.</p>
        </div>
        <div>
            <h3>¿Cómo nació el emprendimiento?</h3>
            <p>Lorem ipsum dolor sit amet. Eos praesentium molestiae aut ipsa quae ex repellat omnis et dolorum rerum. Sed perspiciatis veritatis aut cumque neque eos assumenda repellat!</p>
        </div>
    </div>
}

export default About;