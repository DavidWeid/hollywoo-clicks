import React from "react";
import "./modal.css";

function Modal(props) {
  if (props.score === 12) {
    return alert("You Won");
  }
  return <div></div>;
}

export default Modal;
