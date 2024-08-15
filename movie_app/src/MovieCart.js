import { Component } from "react";

 export default class MovieCart extends Component{
    constructor(){
        super();
        this.state={
         
            title:"JAWAN",
            plot:"Jawan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee in his Hindi film debut",
            price:499,
            rating:9.5,
            stars:0,
            Fvt :false
        }
    }

    decStars=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState({
            stars:this.state.stars -0.5
        })
    }
    addStars=()=>{
        if(this.state.stars>=5){
            return;
        }
        this.setState({
            stars:this.state.stars +0.5
        })
    }

    handleFav=()=>{
        this.setState({
                Fvt:!this.state.Fvt
        })
    }
    render(){
        const {title,plot,price,rating,stars,Fvt}=this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                    <img alt="poster" src="https://i.pinimg.com/564x/93/dd/82/93dd82dbc2a30e10b21be7e7f41f292c.jpg"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">IMdb:{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn"  alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" onClick={this.decStars}/>
                                <img className="stars"  alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                <img className="str-btn"  alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={this.addStars}/>
                                <span className="starCount">{stars}</span>
                            </div>
                            
                            <button className={Fvt?"unfavourite-btn":"favourite-btn"} onClick={this.handleFav} >{Fvt?"unfavourite-btn":"favourite-btn"}</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}