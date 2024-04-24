import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

const TesteNewNavBar = () => {
  return (
    <header>
      <div>
        <a href=""></a>
        <div></div>
        <nav>
          <ul>
            <li className="global-nav__primary-items"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TesteNewNavBar;
