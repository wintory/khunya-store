import React, { Component } from 'react';
import '../CSS/App.css';
import Navbar from './Navbar'
import Form from './Form'
import OrderList from './OrderList'
import Home from './Home'
class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
