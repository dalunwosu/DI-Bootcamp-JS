
import React from "react";


class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteColor: 'red',
            prevColor : null,
            show: true
          };
        }
        componentDidMount() {
          console.log("in the componentDidMount");
            setTimeout(() => {
              this.setState({ favoriteColor: 'yellow' });
            }, 5000);
          }
          changeColor = () => {
            this.setState({favoriteColor: "blue"});
          }
          shouldComponentUpdate =()=>{
            console.log("in the shouldComponentUpdate");
            return true
          }
          componentDidUpdate(prevProps, prevState, snapshot) {
            console.log("in the update");
          }
          getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log("in the getSnapshotBeforeUpdate");
            return true;
          }
          componentWillUnmount() {
            alert('The component named Header is about to be unmounted');
         }
         deleteHeder = () => {
          this.setState({ show: !this.state.show });
        }
    render(){
      console.log("in the render");
        return(
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
              
                <button
          type="button"
          onClick={this.changeColor}
        > Change color</button>
       
           
       {this.state.show ? <h1>Hello word</h1> : null}

               <button
          type="button"
          onClick={this.deleteHeder}
        > Delete Header</button>
            </div>
        )
    }
}
export default Color;


