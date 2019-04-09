import React from "react";
import "./Card.css";

function MemoryCard(props) {
    return (
        <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
        <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        </div>
        </div>
    )
}

export default MemoryCard;