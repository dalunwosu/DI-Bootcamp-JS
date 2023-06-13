import React from 'react'


const clickMe = () => {
    alert('I was clicked')
}
const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
        alert(e.target.value)
    }
}

class Events extends React.Component {

    constructor(params){
        super(params)
        this.state = {
            isToggleOn : true
        }
    }

    toggle = () => {
        this.setState({isToggleOn:!this.state.isToggleOn})
    }


    render(){
        return (
            <div>
                <button onClick={clickMe}>click</button>
                <button onClick={this.toggle}>{this.state.isToggleOn ? 'OFF' : 'ON'}</button>
                <input type='text' onKeyDown={handleKeyDown}/>
            </div>
        )
    }
}

export default Events