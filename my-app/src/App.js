import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Basket from "./Basket";
import Catalog from "./Catalog";
import Command from "./Command";
import Article from "./Article";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/command" element={<Command />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    )
  }
}

export default App;
