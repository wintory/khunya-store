import React, { Component } from 'react';
import logo from '../Picture/logo.svg';
import '../CSS/App.css';
import Navbar from './Navbar'
import axios from 'axios'

class App extends Component {

  submitOrder = () => {
    axios.post('https://khunya-3c3d2.firebaseio.com/', {
      userId: '1',
      title: todoTitle,
      completed: false
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar submitOrder={this.submitOrder} />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
