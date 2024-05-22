import React from "react";

import "./style.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src="./assets/img/logo.png" alt="Logo" />
            <a className="icon-home"><Link className="link-navbar" to="/home"><img src="./assets/icons/home.svg" alt="Home" />Home</Link></a>
            <a className="icon-bag"><Link className="link-navbar" to="/products"><img src="./assets/icons/bag.svg" alt="Produtos" />Produtos</Link></a>
            <a className="icon-about"><Link className="link-navbar" to="/about"><img src="./assets/icons/article.svg" alt="Sobre Nós" />Sobre Nós</Link></a>
            <a className="icon-cart"><img src="./assets/icons/cart.svg" alt="Produtos" /></a>
        </nav>
    );
}