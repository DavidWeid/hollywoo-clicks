import React from "react";
import "./modal.css";

function Modal(props) {
  if (props.score === 11) {
    return (
      <div className="lastDiv">
        <h3>Can you find the last one?</h3>
      </div>
    );
  }
  return (
    <div className="lastDiv">
      <h3 id="quote">{props.quote}</h3>
    </div>
  );
}

export default Modal;
