import React from "react";
import "./image.css";

function Image(props) {
    return (
        <img key={props.id} src={props.image} alt={props.name} className="img-thumbnail click-item mx-auto" />
    );
}

export default Image;