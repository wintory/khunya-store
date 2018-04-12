import React, { Component } from 'react'
import Form from './Form'
export default class Navbar extends Component {




    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="">Khunya</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Order
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="">Order Detail</a>
                                    <a className="dropdown-item" data-toggle="modal" data-target="exampleModal">
                                        Add Order
                            </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Dashboard</a>
                            </li>
                        </ul>
                    </div>


                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </nav >
            </div >
        )
    }
}