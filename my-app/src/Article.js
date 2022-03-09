import React, { Component } from 'react';
import Cardsarticles from './Components/Cardsarticles';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';

class Article extends Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <SearchIDE />
                <div className="articlesg">
                    <div className="articles">
                        <Cardsarticles />
                        <div className="Col">
                            <div className="caracteristics">Name</div> Porte en bois<br></br>
                            <div className="caracteristics">Material</div> Bois<br></br>
                        </div>
                        <div className="Col">
                            <div className="caracteristics">Shape</div> Rectangulaire <br></br>
                            <div className="caracteristics">Type</div> <br></br>
                        </div>
                    </div>
                    <div className="price">Price is "..."$</div>
                </div>
            </div>
        )
    }
}

export default Article;