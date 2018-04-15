import React, { Component } from 'react'
import fire from '../firebase'

export default class ListCard extends Component {

    changeSuccess = (id) => {
        const query = fire.database().ref("order")
        query.orderByChild("id").equalTo(id).on("child_added", (data) => {
            data.ref.update({ status: 'success' })
        });
    }

    changeCancel = (id) => {
        const query = fire.database().ref("order")
        query.orderByChild("id").equalTo(id).on("child_added", (data) => {
            data.ref.update({ status: 'cancel' })
        });
    }


    render() {
        return (

            <div className="alert alert-warning  fade show " role="alert">
                <strong>ผู้สั่ง {this.props.name}</strong> <p>{this.props.vetg} {this.props.option} {this.props.status}</p>
                <p>{this.props.time}</p>
                <button type="button" className="btn btn-light  col-md-6" onClick={() => { this.changeSuccess(this.props.id) }}>
                    <span style={{ color: 'green' }}>success</span>
                </button>

                <button type="button" className="btn btn-light col-md-6" onClick={() => { this.changeCancel(this.props.id) }}>
                    <span style={{ color: 'red' }}>cancel</span>
                </button>

            </div>
        )
    }
}