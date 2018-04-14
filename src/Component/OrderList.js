import React, { Component } from 'react'
import ListCard from './ListCard'

export default class OrderList extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <ListCard />
                    </div>
                </div>
            </div>
        )
    }
}