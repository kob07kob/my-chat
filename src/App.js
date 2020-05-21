import React, { Component } from 'react';
import { Login } from './Login.tsx'
import { Main } from './Main.tsx'
import { Proxy } from './server.ts'


export var proxy = new Proxy();
export default class App extends Component {
  state = { showLogin: true };
  componentDidMount() {
    proxy.addEventListener("login", () => this.setState({ showLogin: false }));
  }
  //proxy = new Proxy();
  render() {
    proxy.addEventListener("login", () => {
      console.log("log in received")
    });
    return (
      <div className="app">
        { this.state.showLogin ? <Login /> : <Main /> }
      </div>
    );
  }
}