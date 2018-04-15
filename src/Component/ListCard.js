import React, { Component } from 'react'

export default class ListCard extends Component {


    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>AAA</strong>
                <strong>{this.props.order}</strong>
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}