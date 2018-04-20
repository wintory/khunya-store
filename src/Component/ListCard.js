import React, { Component } from 'react'

export default class ListCard extends Component {


    state = {
        classname: '',
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
            <div>
                <p>จำนวน {this.props.topic} ทั้งหมด : {this.props.order.length} order</p>
                {this.props.order.map((order, i) => {
                    return (
                        <div className={this.state.classname} role="alert" key={i}>
                            <strong>ผู้สั่ง {order.name}</strong> <p>{order.vetg} {order.option}</p>
                            <p>{order.time}</p>
                            <button type="button" className={this.props.button === true ? "btn btn-light  col-md-6" : "hidden"} onClick={() => { this.props.changeSuccess(order.id) }}>
                                <span style={{ color: 'green' }}>success</span>
                            </button>

                            <button type="button" className={this.props.button === true ? "btn btn-light  col-md-6" : "hidden"} onClick={() => { this.props.changeCancel(order.id) }}>
                                <span style={{ color: 'red' }}>cancel</span>
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}