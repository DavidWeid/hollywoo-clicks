import React from "react";
import "./score.css";

function ScoreBoard(props) {
    return (
        <div>
            {props.score}
        </div>
    );
}

export default ScoreBoard;