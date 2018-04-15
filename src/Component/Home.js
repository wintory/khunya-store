import React, { Component } from 'react'
import Form from './Form'
import OrderList from './OrderList'
import fire from '../firebase';
import { img } from '../Picture/header.png'

export default class Home extends Component {

    state = {
        order: [],
        loading: false,
        button: true,
        topic: ''
    }


    async componentDidMount() {
        let fetch = await setTimeout(this.fetchPendingData(), 3000)
        this.setState({
            loading: false
        })
    }

    fetchPendingData = () => {
        const query = fire.database().ref('order');
        query.orderByChild("status").equalTo('pending').on("child_added", (data) => {
            let result = data.val()
            this.setState({
                order: [...this.state.order, result],
                loading: true,
                topic: 'pending'
            })
        })
    }

    fetchSuccessData = () => {
        const query = fire.database().ref('order');
        query.orderByChild("status").equalTo('success').on("child_added", (data) => {
            let result = data.val()
            this.setState({
                order: [...this.state.order, result],
                button: false,
                topic: 'success'
            })
        })
    }

    fetchCancelData = () => {
        const query = fire.database().ref('order');
        query.orderByChild("status").equalTo('cancel').on("child_added", (data) => {
            let result = data.val()
            this.setState({
                order: [...this.state.order, result],
                button: false,
                topic: 'cancel'
            })
        })
    }


    getList = (val) => {
        this.setState({
            order: []
        })
        if (val === 'pending') {
            this.fetchPendingData()
        } else if (val === 'success') {
            this.fetchSuccessData()
        } else if (val === 'cancel') {
            this.fetchCancelData()
        }
    }


    render() {

        return (
            <div>
                <header >
                    <img src="http://durhambgc.org/wordpress/wp-content/uploads/2017/01/cooking-header.jpeg" className="col-md-12" />
                </header>
                <div className="container">
                    <br />
                    <div className="form-inline">
                        <select className="form-control col-md-4 " id="salad" onChange={e => { this.getList(e.target.value) }} >
                            <option value="pending">pending order</option>
                            <option value="success">success order</option>
                            <option value="cancel">cancel order</option>
                        </select>
                        <button type="button middle col-md-2 offset-1" className="btn btn-primary col-md-2" data-toggle="modal" data-target="#exampleModal">
                            add order
                    </button>
                    </div>
                    <br />
                    <div className={this.state.loading === true ? '' : 'hidden'}>
                        <OrderList button={this.state.button} order={this.state.order} topic={this.state.topic} chgSuccess={this.chgSuccess} chgCancel={this.chgCancel} />
                    </div>
                </div>
                <div className={this.state.loading === false ? 'sk-folding-cube' : 'hidden'}>
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>



                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">เมนูสั่งอาหาร</h5>

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