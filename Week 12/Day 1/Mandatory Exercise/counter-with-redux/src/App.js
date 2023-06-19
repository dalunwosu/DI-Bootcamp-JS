import store from './reducers';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import './App.css';

function App() {
    return (
      <Provider store={store}>    
        <Counter />
      </Provider>
    );
  }

  export default App