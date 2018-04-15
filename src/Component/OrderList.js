import React, { Component } from 'react'
import ListCard from './ListCard'

export default class OrderList extends Component {


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.reset === true) {
            console.log('update');

        }
        console.log('null');

    }

    render() {

        return (
            < div className="container" >
                <br />
                <div className="row">
                    <div className="col-md-6">
                        {this.props.order.map((order, i) => {
                            return (<ListCard name={order.name} status={order.status} topic={this.props.topic} button={this.props.button} id={order.id} key={i} vetg={order.vetg === 'true' ? 'เอาผัก' : 'ไม่เอาผัก'} option={order.option} time={order.time} />)
                        })}
                    </div>
                </div>
            </div >
        )
    }
}