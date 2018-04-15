import React, { Component } from 'react'
import fire from '../firebase'

export default class ListCard extends Component {

    state = {
        classname: ''
    }

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

    componentDidMount() {
        if (this.props.topic === 'success') {
            this.setState({
                classname: "alert alert-success  fade show "
            })
        } else if (this.props.topic === 'pending') {
            this.setState({
                classname: "alert alert-warning  fade show "
            })
        } else {
            this.setState({
                classname: "alert alert-danger  fade show "
            })
        }
    }


    render() {
        return (

            <div className={this.state.classname} role="alert">
                <strong>ผู้สั่ง {this.props.name}</strong> <p>{this.props.vetg} {this.props.option} {this.props.status}</p>
                <p>{this.props.time}</p>
                <button type="button" className={this.props.button === true ? "btn btn-light  col-md-6" : "hidden"} onClick={() => { this.changeSuccess(this.props.id) }}>
                    <span style={{ color: 'green' }}>success</span>
                </button>

                <button type="button" className={this.props.button === true ? "btn btn-light  col-md-6" : "hidden"} onClick={() => { this.changeCancel(this.props.id) }}>
                    <span style={{ color: 'red' }}>cancel</span>
                </button>

            </div>
        )
    }
}