//import logo from './logo.svg';
import './App.css';
import Language from './Language';

let languages = [
  {name: "Php"},
  {name: "Python"},
  {name: "JavaSript"},
  {name: "Java"}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Vote your language!</h1>
      {
            languages.map((item,i) => {
                return <Language language={item.name} key={i}/>
            })
        }
      </header>
    </div>
  );
}

export default App;
