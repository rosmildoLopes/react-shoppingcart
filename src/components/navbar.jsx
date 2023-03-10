import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navbar.css"

export const Navbar = () => {
  return <div className="navbar">
    <div className="links">
      <Link to="/"> Shop </Link>
      <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} size={32} /> </Link>
    </div>
  </div>;
};