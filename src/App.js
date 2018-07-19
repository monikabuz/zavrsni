import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'
import './App.css';
import ChatRoom from './components/ChatRoom'

class App extends Component {
  render() {
    return (
        <div>
          This is the REACT App!
          <ChatRoom />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
