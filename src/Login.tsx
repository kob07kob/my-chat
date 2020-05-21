import React, { Component } from 'react';
import { Proxy } from './server';
import { TextInput } from './TextInput'
import { proxy } from './App';

export class Login extends Component {
    state: MyState = { email: "", password: "", displayName: "", register: false };
    //proxy:Proxy = this.props.proxy;
    render() {
        return (
            <div className="login">
                <p>{this.state.register ? "Switch back to " : "Have no account yet? Go and "} <a href="" onClick={e => {
                    e.preventDefault();
                    this.setState((e:any) => ({ register: !(e.register) })); // pass a function instead of object would not build because of 
                }}>
                    {this.state.register ? "Login" : "Register"} </a>
                </p>
                <img src="logo512.png" width="256" />
                <TextInput type="email" placeholder="Email (someone@example.com)" value={this.state.email} onChange={(e) => {
                    if (e === 'qwerty') {
                        this.setState({ displayName: 'Dávid', email: e });
                    } else {
                        this.setState({ email: e });
                    }
                }} autofocus={true} onEnter={() => this.onClick()} />
                <TextInput type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e })} />
                {this.state.register &&
                    <TextInput type="text" placeholder="Display Name (Agent Smith)" value={this.state.displayName}
                        onChange={e => this.setState({ displayName: e })} onEnter={() => this.onClick()} />}
                <button type="button" onClick={() => this.onClick()}>
                    {this.state.register ? "Register" : "Login"}
                </button>
                <a href="https://www.google.hu/search?q=privacy">Privacy Policy</a>
            </div>);
    }
    onClick() {
        if (this.state.register)
            proxy.sendPacket({
                type: "register", email: this.state.email, password: this.state.password,
                displayName: this.state.displayName, staySignedIn: false
            }); else
            proxy.sendPacket({ type: "login", email: this.state.email, password: this.state.password, staySignedIn: false });
    }
}
interface MyState {
    email: string
    password: string
    displayName: string
    register: boolean
}