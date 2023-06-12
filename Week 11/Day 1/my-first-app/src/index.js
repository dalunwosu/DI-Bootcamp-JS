import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const imgurl = 'https://mma.prnewswire.com/media/958091/JSX_Logo.jpg?p=facebook'
const element = (<div>
<h1>My first JSX Element</h1>
<h1>My first JSX Element</h1>
<img src={imgurl}></img>
</div>
)
root.render(element)
// root.render(


//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
