import React from "react";
import "./header.css";

function Header(props) {
  return (
    <header className="jumbotron jumbotron-fluid">
      <div className="container" id="jumboContainer">
        <h1 className="display-4">
          <span className="hollywoo-title">HOLLYWOO</span>{" "}
          <span className="clicks-title">Clicks</span>
        </h1>
        <p className="lead">Can you click each photo just ONCE?</p>
      </div>
    </header>
  );
}

export default Header;
