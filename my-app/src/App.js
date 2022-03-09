import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Basket from "./Basket";
import Catalog from "./Catalog";
import Article from "./Article";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      carousel: [],
    }
  }

  async componentDidMount() {
    const responseArticle = await fetch('http://localhost:1337/api/articles?populate=*&pagination[0]=1&pagination[limit]=-1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const articles = await responseArticle.json()
    this.setState({ articles: articles })

    const responseCarousel = await fetch('http://localhost:1337/api/carousel-home-pictures?populate=*&pagination[0]=1&pagination[limit]=-1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const carousel = await responseCarousel.json()
    this.setState({ carousel: carousel })
  }

  render() {
    console.log(this.state)
    return (
      <Routes>
        <Route path="/" element={<Home articles={this.state.articles} carousel={this.state.carousel} />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/catalog" element={<Catalog articles={this.state.articles} />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    )
  }
}

export default App;
