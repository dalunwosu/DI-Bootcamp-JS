//import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Carousel>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt='Hong Kong'/>
                    <p className="hong-kong">Hong Kong</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt='Macao'/>
                    <p className="macao">Macao</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt='Japan'/>
                    <p className="japan">Japan</p>
                </div>
                <div>
                    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt='Las Vegas' />
                    <p className="las-vegas">Las Vegas</p>
                </div>
            </Carousel>
      </header>
    </div>
  );
}

export default App;
