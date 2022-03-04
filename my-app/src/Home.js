import React from 'react'
import Cardsarticles from './Components/Cardsarticles';
import Footer from './Components/Footer';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';


function Home() {
    return (
        <div className="Home">
            <Navigationbar />
            <SearchIDE />
            <h1>Hello world</h1>
            <Cardsarticles />
            <Footer />
        </div>
    )
}

export default Home;