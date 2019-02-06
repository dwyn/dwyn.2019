import React from "react";
import { Link } from "react-router";

export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <Link to={"/"} activeStyle={{ color: "red" }}>Home</Link>
        </div>
      </div>
    </nav>
  );
};