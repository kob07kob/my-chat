import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Proxy} from './server';
import { OutgoingPacket } from './chat';


function App() {
  var proxy = new Proxy();
  proxy.addEventListener("login", ()=> {
      console.log("log in received")
  })
  let packet:OutgoingPacket = { type: "register", email: 'TRDMYUSER', password: 'secretpassword', displayName: 'iamironman', staySignedIn: false };
  proxy.sendPacket(packet);
}

export default App;
