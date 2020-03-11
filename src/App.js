import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: [],
      isClicked: false
    };
  }

  toggle = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.input], 
      input: ''
    })
  }

  deleteItem = index => {
    console.log(index)
    this.setState(prevState => {
      return {items: prevState.items.filter((_, i) => i !== index)}
    })
    console.log(this.state.items)
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate} />
          <button onClick={this.toggle}>Submit</button>
        </form>
        <FirstComponent items={this.state.items} deleteItem={this.deleteItem}/>
      </header>
    </div>
  );
  }
}

export default App;
