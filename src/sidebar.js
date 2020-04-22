import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.css'
import { Link } from 'react-router-dom'

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/photos">
        Photos
      </Link>

      <Link className="menu-item" to="/videos">
        Videos
      </Link>


      <Link className="menu-item" to="/resume">
        Resume
      </Link>

    </Menu>
  );
};
