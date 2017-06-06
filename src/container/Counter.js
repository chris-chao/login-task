/**
 * Created by christopherchao on 6/5/17.
 */
import React from "react";
import {Component} from "react";
import Greeting from "../components/Greeting";
import Name from "../components/Name";

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            name:""
        };
    }

    updateCount = () => this.setState({count: this.state.count + 1});

    updateName = (event) => {
        const name = event.target.value;
        this.setState({name});
    }

    render(){
        return (
            <div>
                <Greeting name={this.state.name} />
                <span>{this.state.count}</span>
                <p>
                    <button onClick={this.updateCount}> Increment</button>
                </p>
                <Name updateName={this.updateName} />
        </div>);
    }

}

