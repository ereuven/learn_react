import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/clock';
import UsersList from './components/users/list';
import {GetUsers} from './services/users';
import SampleForm from './components/form/form';


function App() {
  const users = GetUsers();

  return (
    <div className="App">
      <Clock color="#2f2bab" num="1"/>
      <Clock color="red" num="2" ticks={true}/>
      <Clock/>

      <br/>
      <UsersList users={users}/>

      <br/>
      <SampleForm />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
