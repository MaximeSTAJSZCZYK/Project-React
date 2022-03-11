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
      basketArticles: [],
    }
  }

  updateBasket = (storedArticles, articleId, addBasket) => {
    let temp = [];
    let totalPrice = Number(localStorage.getItem('totalPrice'));

    temp = JSON.parse(localStorage.getItem('basketArticles')) || [];

    if (addBasket) {
      temp.push(storedArticles);
      totalPrice += Number(storedArticles.data.attributes.price);
    }
    else {
      console.log(storedArticles);
      temp.splice(articleId, 1);
      totalPrice -= Number(storedArticles.data.attributes.price);
    }

    totalPrice = Number(totalPrice).toFixed(2);

    localStorage.setItem('basketArticles', JSON.stringify(temp));
    localStorage.setItem('totalPrice', totalPrice);

    this.setState({
      basketArticles: {...temp},
    });
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

    const responseCarousel = await fetch('http://localhost:1337/api/carousel-home-pictures?populate=*&pagination[0]=1&pagination[limit]=-1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const carousel = await responseCarousel.json()

    var temp = []
    temp = JSON.parse(localStorage.getItem('basketArticles')) || [];

    this.setState({ 
      basketArticles: {...temp},
      carousel: carousel,
      articles: articles
    })
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home articles={this.state.articles} carousel={this.state.carousel} />} />
        <Route path="/basket" element={<Basket articles={this.state.articles} updateBasket={this.updateBasket} />} />
        <Route path="/catalog" element={<Catalog articles={this.state.articles} />} />
        <Route path="/article" element={<Article articles={this.state.articles} updateBasket={this.updateBasket} />} />
      </Routes>
    )
  }
}

export default App;
