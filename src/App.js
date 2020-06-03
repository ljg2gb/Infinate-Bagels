import React, { Component } from 'react';
import Header from "./Header";
import Form from "./Form";
import Container from "./Container";

import './App.css';

class App extends Component{

  state = {
    bagels: []
  }

  componentDidMount() {
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(result => this.setState({bagels:result}))
  }

  render () {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Container bagels={this.state.bagels}/>
      </div>
    );
  }
}

export default App;
