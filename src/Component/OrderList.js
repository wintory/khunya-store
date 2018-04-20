import React, { Component } from 'react'
import ListCard from './ListCard'

export default class OrderList extends Component {


    render() {


        return (
            < div className="container" >
                <br />
                <div className="row">
                    <div className="col-md-6">
                        {this.props.order.map((result, i) => {
                            return (<ListCard changeSuccess={this.props.changeSuccess} order={this.props.order[i]} changeCancel={this.props.changeCancel} name={result.name} status={result.status} topic={this.props.topic} button={this.props.button} id={result.id} key={i} vetg={result.vetg === 'true' ? 'เอาผัก' : 'ไม่เอาผัก'} option={result.option} time={result.time} />)
                        })}
                    </div>
                </div>
            </div >
        )
    }
}