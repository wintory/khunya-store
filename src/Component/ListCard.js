import React, { Component } from 'react'
import fire from '../firebase';

export default class ListCard extends Component {

    componentDidMount() {
        console.log(fire.database().ref('order'));
    }

    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}