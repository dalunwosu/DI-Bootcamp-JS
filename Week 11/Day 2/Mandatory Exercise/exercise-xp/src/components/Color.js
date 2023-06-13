
import React from 'react';

class Color extends React.Component{
    constructor(){
        super();
        this.state = {
            favoritecolor: "red"
        };
    };

    changecolor = () => {
        this.setState({favoritecolor:'blue'})
    }

    componentDidMount = () =>{
        setTimeout(() => {
            this.setState({favoritecolor:'yellow'})
        },5000)
        
    }

    render(){
        return (
            <div>
            <h1>my favorite color is {this.state.favoritecolor}</h1>
            <button onClick={this.changecolor}>change color</button>
            </div>
        );
    };
}

export default Color