import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Basket from "./Basket";
import Catalog from "./Catalog";
import Command from "./Command";
import Article from "./Article";



class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/Command" element={<Command />} />
        <Route path="/Article" element={<Article />} />
      </Routes>
    )
  }
}

export default App;
