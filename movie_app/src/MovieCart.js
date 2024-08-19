import { Component } from "react";

 export default class MovieCart extends Component{
   
    render(){
        console.log(this.props);
       const {movies,addStars,decStars,toggleFvt,toggleCart}=this.props

        const {title,plot,price,rating,stars,Fvt,isInCart,poster}=this.props.movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                    <img alt="poster" src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">IMdb:{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn"  alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" onClick={()=>{decStars(movies)}}/>
                                <img className="stars"  alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                <img className="str-btn"  alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={()=>{addStars(movies)}}/>
                                <span className="starCount">{stars}</span>
                            </div>
                            
                            <button className={Fvt?"unfavourite-btn":"favourite-btn"} onClick={()=>{toggleFvt(movies)}} >{Fvt?"unfavourite":"favourite"}</button>
                            <button className={isInCart?"unfavourite-btn":"cart-btn"} onClick={()=>{toggleCart(movies)}}>{isInCart?"Remove cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}