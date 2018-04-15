import React, { Component } from 'react'
import Form from './Form'
import OrderList from './OrderList'
import fire from '../firebase';

export default class Home extends Component {

    state = {
        order: []
    }


    componentDidMount() {
        const starCountRef = fire.database().ref('order');
        starCountRef.limitToLast(10).on("child_added", (data) => {
            this.setState({
                order: [...this.state.order, data.val()]
            })
        })
    }



    render() {
        console.log(this.state.order);

        return (
            <div>
                <header className="App-header">

                </header>
                <div className="container">
                    <br />
                    <div className="row">
                        <button type="button" className="btn btn-primary col-md-2" data-toggle="modal" data-target="#exampleModal">
                            add order
                    </button>
                        <br />
                        <OrderList order={this.state.order} />
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">เมนูสั่งอาหาร</h5>
                                <span aria-hidden="true">&times;</span>

                            </div>
                            <div className="modal-body">
                                <Form />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}