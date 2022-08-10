import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "./Header.scss";
import logo from "../../assets/logo.png";

export default class Header extends Component {
    render() {
        return (
            <header className="Header">
                <img src={logo} className="Logo" alt="logo" />
                <nav className="Nav">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <button>Sign in</button>
                </nav>
            </header>
        );
    }
}