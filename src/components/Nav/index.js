import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="text-light text-center mx-auto nav-text">
        {props.children}
      </div>
    </nav>
  );
}

export default Nav;
