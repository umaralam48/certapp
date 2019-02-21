import React, { Component } from 'react'
import './App.css';
export default class form extends Component {
    constructor(props) {
        super(props);
        this.handletype = this.handletype.bind(this);
        this.handleorder = this.handleorder.bind(this);
    }
    handletype(e) {
        //console.log(e.target);
        this.props.handletype(e);
    }
    handleorder(e) {
        this.props.handleorder(e.target.value);
    }
    render() {
        return (
            <div>

                Literary<input type='radio' name='type' value='Literary' onChange={this.handletype} defaultChecked></input>
                Tech<input type='radio' name='type' value='Tech' onChange={this.handletype} ></input>
                Academic<input type='radio' name='type' value='Academic' onChange={this.handletype} ></input>
                <select onChange={this.handleorder}>
                    <option value='inc'>Increasing order</option>
                    <option value='dec'>Decreasing order</option>
                </select>

            </div>
        )
    }
}
