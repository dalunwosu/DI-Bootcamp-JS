import React, { Component } from "react";
import './App.css';
import superheroes from './superheroes.json'


function SuperHeroCard(hero) {
  return (
      <div className={"card " + (hero.Clicked ? "animate" : "")} onClick={() => hero.handleClick( hero.id)} >  
          <div className="img-container">
              <img alt={hero.name} src={hero.image} />
          </div>
          <div className="img-content">
              <ul>
                  <li>
                      <strong>Name: </strong>{hero.name}
                  </li>
                  <li>
                      <strong>Occupation: </strong>{hero.occupation}
                  </li>
              </ul>
          </div>
      </div >
  )
}

function Instruction(hero) {
  return (
    <div className="instruction instruction-fluid">
      <div className="container">{hero.children}
        <p className="lead">Get points by clicking on an image but don't click on any more than once!</p>
      </div>
    </div>
  )
}

function Navbar(hero) {
  return (
      <header className="container-fluid fixed-top" >
          <div className="row">
              <h1 className="col-sm-8">Superheroes Memory Game</h1>
              <nav className="col-sm-4">
                  <p>Score: <span>{hero.currentScore}</span></p>
                  <p>Top Score: <span>{hero.highScore}</span> </p>
                  {hero.children}
              </nav>
          </div>
      </header>        
  )
}

function Wrapper(hero){
  return <div className="wrapper">{hero.children}</div>
}

class App extends Component {
  state = {
    superheroes,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  };

  handleScore = id => {
    this.state.superheroes.superheroes.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.superheroes.superheroes.forEach(element => (element.clicked = false));
        console.log(this.state.superheroes.superheroes);
      }
    });
  };

  shuffleArray = () => {

    const shuffledArr = this.shuffle(this.state.superheroes.superheroes);
   
    this.setState({ shuffledArr });
  };


  handleIncrement = () => {

    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

  
    while (0 !== currentIndex) {
   
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

   
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Instruction />
        {this.state.superheroes.superheroes.map(superhero => (
          <SuperHeroCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={superhero.id}
            key={superhero.id}
            name={superhero.name}
            image={superhero.image}
            occupation={superhero.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;