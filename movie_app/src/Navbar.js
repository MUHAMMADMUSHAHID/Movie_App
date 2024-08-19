import React from "react";


class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div>Movie App</div>
                <div>
                    <img alt="Cart icon"/>
                    <span>0</span>
                </div>
            </div>

        )
    }
}
export default Navbar;