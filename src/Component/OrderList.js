import React, { Component } from 'react'
import ListCard from './ListCard'

export default class OrderList extends Component {

    render() {

        return (
            < div className="container" >
                <br />
                <div className="row">
                    <div className="col-md-6">
                        {this.props.order.map(order => {
                            return (<ListCard name={order.name} key={order.id} vetg={order.vetg === 'true' ? 'เอาผัก' : 'ไม่เอาผัก'} option={order.option} time={order.time} />)
                        })}
                    </div>
                </div>
            </div >
        )
    }
}