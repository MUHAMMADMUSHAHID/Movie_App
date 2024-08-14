import { Component } from "react";

 export default class MovieCart extends Component{
    render(){
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                    <img alt="poster"/>
                    </div>
                    <div className="right">
                        <div className="title"></div>
                        <div className="plot"></div>
                        <div className="price"></div>
                        <div className="footer">
                            <div className="rating"></div>
                            <div className="stars"></div>
                            <button className="favourite-btn"></button>
                            <button className="cart-btn"></button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}