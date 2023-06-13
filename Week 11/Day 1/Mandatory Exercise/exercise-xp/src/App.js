//import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './exercise-4';



//Exercise 3
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>

        <UserFavoriteColors fav_animals={user.favAnimals}/>
        <Exercise4/>
      </header>
    </div>
  );
}

export default App;
