/**
 * Created by christopherchao on 6/5/17.
 */
import React from "react";
import {Component} from "react";
import {login} from "../ecapi";
import Greeting from "../components/Greeting";
import LoginFormMarkup from "../components/LoginFormMarkup";

export default class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            user: {},
            isLoggedIn: false
        }
    }
    updateEmail = (e) => this.setState({email: e.target.value});

    updatePassword = (e) => this.setState({password: e.target.value});

    async login () {
        const {email, password} = this.state;
        try{
            const results = await login(email, password);
            const {user} = results;
            this.setState({user, isLoggedIn: true});
            console.log(user);
        }
        catch(error){
            console.error("Authentication did not work " + error);
        }
    }



    render() {
        const returnResult = this.state.isLoggedIn
            ?
            <Greeting name={this.state.user.first_name}/>
            :
            <LoginFormMarkup updateEmail={this.updateEmail}
                             updatePassword={this.updatePassword}
                             login={this.login.bind(this)}
            />;

        return returnResult;
    }

}

