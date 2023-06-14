import React from 'react';

class BuggyCounter extends React.Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    add=()=>{
        this.setState({count:this.state.count +1})
    }
    render(){
        if(this.state.count > 5){
            throw Error (' Crashed...')
        }
        return(
            <>
            <h2 onClick={this.add}>{this.state.count}</h2>
            
    
            </>
        )
    }
}
export default BuggyCounter