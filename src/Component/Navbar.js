import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {




    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="./" className="navbar-brand" href="">Khunya</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="./" className="nav-link" href="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./dashboard" className="nav-link" >Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </nav >
            </div >
        )
    }
}