import React, { Component } from 'react'
import '../CSS/App.css'
import fire from '../firebase';

export default class Form extends Component {

    state = {
        vetg: 'true',
        option: 'seafood',
        order: [],
        count: 0
    }

    getVetg = val => {
        this.setState({
            vetg: val
        })
    }

    getOption = val => {
        this.setState({
            option: val
        })
    }


    addOrder = () => {
        this.setState({
            order: [...this.state.order, { id: this.state.count, vetg: this.state.vetg, option: this.state.option, time: new Date().toLocaleString() }],
            vetg: 'true',
            option: 'seafood',
            count: this.state.count + 1
        })
        console.log(this.state.order);

    }



    closeModal = () => {
        this.setState({
            vetg: 'true',
            option: 'seafood',
            order: []
        })
    }

    delOrder = (key) => {
        this.setState({
            order: this.state.order.filter(e => { if (e.id !== key) { return e } })
        })
    }

    submitOrder = (e) => {
        if (e !== null || e !== []) {
            fire.database().ref('order').push(e);
            console.log('add success');
            this.setState({
                vetg: 'true',
                option: 'seafood',
                order: [],
                count: 0
            })
        } else {
            alert('please input order')
        }

    }




    render() {

        return (
            <div>
                <div className="form-check form-inline col-md-12">
                    <select className="form-control col-md-4 offset-1" id="salad" onChange={e => { this.getVetg(e.target.value) }} >
                        <option defaultValue value="true">เอาผัก</option>
                        <option value="false">ไม่เอาผัก</option>
                    </select>
                    <select className="form-control col-md-4 offset-1" id="salad" onChange={e => { this.getOption(e.target.value) }} >
                        <option defaultValue value="seafood">ซีฟู้ด</option>
                        <option value="salad">สลัด</option>
                        <option value="oil" >น้ำมันงา</option>
                    </select>
                    <button className="btn btn-primary col-md-1 offset-1" onClick={() => { this.addOrder() }}>+</button>
                </div>
                <br />
                <div className="card col-md-12">
                    <ul className="list-group list-group-flush">

                        {this.state.order.map((e) => {
                            return (
                                <li key={e.id} className="list-group-item">{e.vetg === 'true' ? 'เอาผัก' : 'ไม่เอาผัก'} {e.option} <button className="btn btn-light red" onClick={() => this.delOrder(e.id)}>x</button></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { this.closeModal() }}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => { this.submitOrder(this.state.order) }}>ส่งorder</button>
                </div>
            </div>
        )
    }
}