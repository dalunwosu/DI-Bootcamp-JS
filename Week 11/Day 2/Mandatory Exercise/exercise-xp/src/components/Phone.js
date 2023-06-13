

import React from 'react';

class Phone extends React.Component{
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    };

    changecolor = () => {
        this.setState({color:'blue'})
    }

    render(){
        return (
            <div>
            <h1>{this.state.brand} {this.state.model}</h1>
            <h3>{this.state.color}, {this.state.year}</h3>

            <button onClick={this.changecolor}>change color</button>
            </div>
        );
    };
}

export default Phone