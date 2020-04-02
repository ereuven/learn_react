import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const element = <h1>Hello world{"!"}</h1>;

// function tick(){
//   const element = (
//     <div>
//       <h1>Hello world!</h1>
//       <i>{new Date().toLocaleTimeString()}</i>
//     </div>
//   );

//   //ReactDOM.render(element, document.getElementById('clock'));
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 100);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
