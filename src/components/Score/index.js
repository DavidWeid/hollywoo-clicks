import React from "react";
import "./score.css";

function ScoreBoard(props) {
  return (
    <div>
      <span className="current-score">Score: {props.score}</span> |{" "}
      <span className="top-score">Top Score: {props.topScore}</span>
    </div>
  );
}

export default ScoreBoard;
