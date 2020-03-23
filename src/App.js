import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './listItemComponent';
import ShowFormInput from './showFormInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: [],
      showTaskInput: false,
    };
  }

  displayTaskInput = () => {
    this.setState({showTaskInput: !this.state.showTaskInput})
  }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  editInput = (event, i) => {
    const items = this.state.items.slice();
    items[i] = event.target.value
    this.setState({items: items})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.input], 
      input: '',
      showTaskInput: false,
    })
  }

  deleteItem = index => {
    this.setState(prevState => {
      return {items: prevState.items.filter((_, i) => i !== index)}
    })
  }

  render() {

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <h1>To-Do List:</h1>
        <div className="todo-box">
          <div>
            <ul>
              {this.state.items.map((item, index) => {
                return (<ListItem
                  index={index}
                  item={item}
                  editInput={this.editInput}
                  items={this.state.items} 
                  deleteItem={this.deleteItem}
                />)
              })}
            </ul>
            </div>
        </div>
        <button 
          className="btn" 
          onClick={this.displayTaskInput}>+ New Task
        </button>
        {this.state.showTaskInput && <ShowFormInput 
          formSubmit={this.formSubmit} 
          input={this.state.input} 
          inputUpdate={this.inputUpdate}/>}
      </div>
    </div>
  );
  }
}

export default App;
