import React, { Component } from 'react'
import Form from './Form'
import OrderList from './OrderList'
import fire from '../firebase';
import { img } from '../Picture/header.png'
import md5 from 'blueimp-md5'

export default class Home extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        orderKey: [],
        order: [],
        loading: false,
        button: true,
        topic: ''
    }


    async componentDidMount() {
        this.setState({
            order: []
        })
        let fetch = await setTimeout(this.fetchPendingData(), 3000)
        this.setState({
            loading: false
        })
    }

    fetchPendingData = () => {
        const query = fire.database().ref('order');
        query.orderByChild("status").equalTo('pending').limitToLast(80).once("value", (data) => {
            let result = data.val()
            this.setState({
                order: [Object.keys(result).map(key => { return result[key] })],
                button: true,
                loading: true,
                topic: 'pending'
            })
        })
    }

    fetchSuccessData = () => {
        const query = fire.database().ref('order');
        query.orderByChild("status").equalTo('success').once("value", (data) => {
            let result = data.val()
            this.setState({
                order: [Object.keys(result).map(key => { return result[key] })],
                button: false,
                topic: 'success'
            })
        })
    }

    fetchCancelData = () => {
        const query = fire.database().ref('order');
        query.orderByChild("status").equalTo('cancel').once("value", (data) => {
            let result = data.val()
            this.setState({
                order: [Object.keys(result).map(key => { return result[key] })],
                button: false,
                topic: 'cancel'
            })
        })
    }

    checkLogin = () => {
        let id = md5("khunyakhunya")
        let password = md5("khunya")
        console.log(id);
        console.log(password);

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

    changeSuccess = (id) => {
        const query = fire.database().ref("order")
        query.orderByChild("id").equalTo(id).once("child_added", (data) => {
            data.ref.update({ status: 'success' })
        });
        this.fetchPendingData()
    }

    changeCancel = (id) => {
        const query = fire.database().ref("order")
        query.orderByChild("id").equalTo(id).once("child_added", (data) => {
            data.ref.update({ status: 'cancel' })
        });
        this.fetchPendingData()
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
                        <button type="button" className={this.state.button === true ? 'btn btn-primary col-md-2' : 'btn btn-primary col-md-2 hidden'} data-toggle="modal" data-target="#exampleModal">
                            add order
                    </button>
                    </div>
                    <br />
                    <div className={this.state.loading === true ? '' : 'hidden'}>
                        <OrderList button={this.state.button} order={this.state.order} topic={this.state.topic} changeSuccess={this.changeSuccess} changeCancel={this.changeCancel} />
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
                                <Form fetchPendingData={this.fetchPendingData} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}