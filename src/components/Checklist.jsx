import React from "react";
import back from '../assets/img/backgrounds/checklist.png';
import checklistIcon from "../assets/img/checklist-icon.svg";

const Checklist = () => {
    const stylesBack = {
        backgroundImage: `url(${back})`,
    }

    return <div className="checklist" style={stylesBack} id="checklist">
        <h2>Checklist para cuidar tus joyas Ticoy</h2>
        <ol className="checklist-items">
            <li className="checklist-item">
                <p className="checklist-number">1</p>
                <p className="checklist-data">No uses&nbsp;<span className="bold">productos de limpieza</span>&nbsp;con tus joyas puestas.</p>
            </li>
            <li className="checklist-item">
                <p className="checklist-number">2</p>
                <p className="checklist-data">No lleves tus joyas al&nbsp;<span className="bold">mar.</span></p>
            </li>
            <li className="checklist-item">
                <p className="checklist-number">3</p>
                <p className="checklist-data">No las úses para&nbsp;<span className="bold">hacer deporte.</span></p>
            </li>
            <li className="checklist-item">
                <p className="checklist-number">4</p>
                <p className="checklist-data">Guardalas en un&nbsp;<span className="bold">lugar ventilado.</span></p>
            </li>
            <li className="checklist-item">
                <p className="checklist-number">5</p>
                <p className="checklist-data">No&nbsp;<span className="bold">duermas</span>&nbsp;con ellas.</p>
            </li>
        </ol>
        <div className="checklist-alert">
            <img src={checklistIcon} alt="Icono de alerta" />
            <p>Trabajamos con materiales nobles y de calidad como el acero quirúrgico y la plata 925. 
                Si bien son super duraderos necesitan ciertos cuidados para que permanezcan con su brillo 
                y color original. Podés encontrar información más detallada sobre cada uno de ellos en la 
                sección de preguntas frecuentes.</p>
        </div>
    </div>
}

export default Checklist;