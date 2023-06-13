import React from 'react'
import Garage from './Garage'

class Car extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color:'pink'
        }
    }
    render(){
        return (
            <header>
                <h2>This {this.props.carinfo.name} is a {this.state.color} {this.props.carinfo.model} </h2>
                <Garage size='tiny'/>
            </header>
        )
    }
}

export default Car