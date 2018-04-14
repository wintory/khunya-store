import React, { Component } from 'react'
import ListCard from './ListCard'
import fire from '../firebase';

export default class OrderList extends Component {

    state = {
        order: ''
    }


    componentDidMount() {
        const starCountRef = fire.database().ref('order');
        starCountRef.limitToLast(10).on("child_added", (data) => {

            this.setState({
                order: [this.state.order, data.val()]
            })
        })
    }


    render() {
        console.log(this.state.order);

        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
            </div>
        )
    }
}