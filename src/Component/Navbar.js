import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {


    state = {
        activeHome: true,
        activeDashboard: false
    }

    chgHomeActive = () => {
        this.setState({
            activeHome: true,
            activeDashboard: false
        })
    }

    chgDashboardActive = () => {
        this.setState({
            activeDashboard: true,
            activeHome: false
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="./" className="navbar-brand">Khunya</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className={this.state.activeHome === true ? 'nav-item active' : 'nav-item'}>
                                <Link to="./" className="nav-link" onClick={() => this.chgHomeActive()}>Home <span className="sr-only">(current)</span></Link>
                            </li> */}
                            {/* <li className={this.state.activeDashboard === true ? 'nav-item active' : 'nav-item'}>
                                <Link to="./dashboard" className="nav-link" onClick={() => this.chgDashboardActive()}>Dashboard</Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div >
        )
    }
}