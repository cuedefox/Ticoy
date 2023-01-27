import React from "react";
import back from '../assets/img/backgrounds/checklist.png';
import items from '../db/checklist.json';
import ChecklistItem from "../Items/ChecklistItem";
import checklistIcon from "../assets/img/checklist-icon.svg";

const Checklist = () => {
    const stylesBack = {
        backgroundImage: `url(${back})`,
    }

    return <div className="checklist" style={stylesBack} id="about">
        <h2>Checklist para cuidar tus joyas Ticoy</h2>
        <ol className="checklist-items">
            {
                items.map(item => <ChecklistItem key={`checklist-item-${item.id}`} item={item} />)
            }
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