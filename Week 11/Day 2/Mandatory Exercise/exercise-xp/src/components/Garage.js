import React from 'react'

class Garage extends React.Component {
    render(){
        return (
            <header>
                <h2>Who lives in my {this.props.size} Garage? </h2>
            </header>
        )
    }
}

export default Garage