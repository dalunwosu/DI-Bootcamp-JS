
// Exercise 4


import "./exercise-4.css"

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise4 = () => {
    return (<>
    <h1 style={style_header}>styled</h1>
    <p className="para">paragraph</p>
    <a href="google.com">link</a>
    <form>
        <input type="text"></input>
        <button type="submit"> Submit</button>
    </form>
    <img src="https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png" width="500" height="400" alt=""/>
    <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
    </ul>
    </>)

}

export default Exercise4