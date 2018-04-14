import React, { Component } from 'react';
import logo from '../Picture/logo.svg';
import '../CSS/App.css';
import Navbar from './Navbar'
import Form from './Form'
import OrderList from './OrderList'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <br />
          <div className="row">
            <button type="button" className="btn btn-primary col-md-12" data-toggle="modal" data-target="#exampleModal">
              add order
          </button>
            <br />
            <OrderList />
          </div>
        </div>


        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">เมนูสั่งอาหาร</h5>
                <span aria-hidden="true">&times;</span>

              </div>
              <div className="modal-body">
                <Form />
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
