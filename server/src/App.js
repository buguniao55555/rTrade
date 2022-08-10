import React from "react";
import { Routes, Route } from "react-router-dom";
//import { MDBContainer } from "mdbreact";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import './App.scss';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route exact path="/" element={<Home updateTitle={this.updateTitle} />} />

          {/* About Poll Buddy Page */}
          <Route exact path="/about" element={<About updateTitle={this.updateTitle} />} />
        </Routes>
        
      </div>
    );
  }
}