import React from "react";

const ChecklistItem = ({item}) => {
    return <li className="checklist-item">
        <p className="checklist-number">{item.id}</p>
        <p className="checklist-data">{item.data}</p>
    </li>
}

export default ChecklistItem;