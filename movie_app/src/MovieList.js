import { Component } from "react";
import MovieCart from "./MovieCart";

class MovieList extends Component{
    constructor(){
        super();
        this.state={
         movies:[{
            title:"JAWAN",
            plot:"Jawan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee in his Hindi film debut",
            poster:"https://i.pinimg.com/564x/93/dd/82/93dd82dbc2a30e10b21be7e7f41f292c.jpg",
            price:499,
            rating:9.5,
            stars:0,
            Fvt :false,
            isInCart:false
        },
        {
            title:"PATHAN",
            plot:"Pathaan is a 2023 Indian Hindi-language action thriller film co-written and directed by Siddharth Anand and produced by Aditya Chopra under Yash Raj Films.",
            poster:"https://i.pinimg.com/236x/64/8b/a3/648ba30ac2f9e5d028e0117c69619539.jpg",
            price:399,
            rating:8.5,
            stars:0,
            Fvt :false,
            isInCart:false
        },
        {
            title:"DUNKI",
            plot:"Dunki is a 2023 Indian Hindi-language comedy drama film based on the illegal immigration technique called donkey flight",
            poster:"https://i.pinimg.com/236x/5f/34/81/5f348115b3412c96312b909f2f226c28.jpg",
            price:699,
            rating:9.8,
            stars:0,
            Fvt :false,
            isInCart:false
        },
         ]
    }
    }
  
    handleIncStar=(movie)=>{
        const  {movies}=this.state;
        const mid = movies.indexOf(movie);
        if (movies[mid].stars>=5)
        {return;    }
        movies[mid].stars+=0.5
        this.setState({
            movies:movies
        })
    }
    handleDecStar=(movie)=>{
        const  {movies}=this.state;
        const mid = movies.indexOf(movie);
        if (movies[mid].stars<=0)
        {return;    }
        movies[mid].stars -=0.5
        this.setState({
            movies:movies
        })
    }
    handleToggleFav=(movie)=>{
        const  {movies}=this.state;
        const mid = movies.indexOf(movie);
        movies[mid].Fvt =!movies[mid].Fvt
        this.setState({
            movies
        })
    }
    handleToggleCart=(movie)=>{
        const  {movies}=this.state;
        const mid = movies.indexOf(movie);
        movies[mid].isInCart =!movies[mid].isInCart
        this.setState({
            movies
        })
    }
    render(){
    //    const{title,plot,price,rating,stars,Fvt,isInCart}=this.state;
    const {movies}=this.state;
        return(
            <>
            {movies.map((movie)=><MovieCart movies={movie} addStars={this.handleIncStar}
                                                            decStars={this.handleDecStar} 
                                                            toggleFvt={this.handleToggleFav}
                                                            toggleCart={this.handleToggleCart} />)}
            
           

            </>
        )
    }
}
export default MovieList;