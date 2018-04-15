import React, { Component } from 'react'

export default class ListCard extends Component {


    render() {
        return (

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>ผู้สั่ง {this.props.name}</strong> <p>{this.props.vetg} {this.props.option} {this.props.time}</p>
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}