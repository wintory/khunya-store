import React, { Component } from 'react'
import '../CSS/App.css'
import fire from '../firebase';

export default class Form extends Component {

    state = {
        vetg: '',
        option: '',
        order: [],
        count: Math.floor(Math.random() * 5000),
        name: ''
    }

    getVetg = val => {
        if (val !== "null" && val !== '') {
            this.setState({
                vetg: val
            })
        } else {
            console.log('false');

        }
    }

    getOption = val => {
        if (val !== "null" && val !== '') {
            this.setState({
                option: val
            })
        } else {
            console.log('false');

        }
    }


    addOrder = () => {
        if (this.state.name !== '' && this.state.option !== '' && this.state.vetg !== '') {
            this.setState({
                order: [...this.state.order, { id: this.state.count, name: this.state.name, vetg: this.state.vetg, option: this.state.option, status: 'pending', time: new Date().toJSON() }],
                count: Math.floor(Math.random() * 50000),
            })
        } else {
            console.log('error');
        }
    }

    getName = thisname => {
        this.setState({
            name: thisname
        })
    }


    closeModal = () => {
        window.location.reload();
    }

    delOrder = (key) => {
        this.setState({
            order: this.state.order.filter(e => { if (e.id !== key) { return e } })
        })
    }

    submitOrder = () => {
        if (this.state.order !== null && this.state.order !== []) {
            this.state.order.map(dt => {
                fire.database().ref('order').push(dt);
            })
            this.setState({
                vetg: '',
                option: '',
                order: [],
                count: 0, name: ''
            })
        } else {
            alert('please input order')
        }
        this.props.fetchPendingData()
    }

    render() {

        return (
            <div>
                <div className="form-check form-inline col-md-12">
                    <div className="input-group col-md-12">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">ชื่อลูกค้า</span>
                        </div>
                        <input type="text" className="form-control col-md-12" placeholder="ชื่อลูกค้า" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.getName(e.target.value)} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <select className="form-control col-md-4 offset-1" id="salad" onChange={e => { this.getVetg(e.target.value) }} >
                        <option value="null">เลือกเครื่องเคียง</option>
                        <option value="เอาผัก">เอาผัก</option>
                        <option value="ไม่เอาผัก">ไม่เอาผัก</option>
                    </select>
                    <select className="form-control col-md-4 offset-1" id="salad" onChange={e => { this.getOption(e.target.value) }} >
                        <option value="null">เลือกน้ำจิ้ม</option>
                        <option value="ซีฟู้ด">ซีฟู้ด</option>
                        <option value="ซอสเผ็ดเกาหลี" >ซอสเผ็ดเกาหลี</option>
                    </select>
                    <button className="btn btn-primary col-md-1 offset-1" onClick={() => { this.addOrder() }}>+</button>
                </div>
                <br />
                <div className="card col-md-12">
                    <ul className="list-group list-group-flush">

                        {this.state.order.map((e) => {
                            return (
                                <li key={e.id} className="list-group-item">{e.vetg} {e.option} <button className="btn btn-light red" onClick={() => this.delOrder(e.id)}>x</button></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => { this.submitOrder() }}>ส่งorder</button>
                </div>
            </div>
        )
    }
}