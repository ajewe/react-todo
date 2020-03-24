import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './listItemComponent';
import ShowFormInput from './showFormInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: {todo: '', urgency: 'lightgreen'},
      items: [],
      showTaskInput: false,
    };
  }

  displayTaskInput = () => {
    this.setState({showTaskInput: !this.state.showTaskInput})
  }

  inputUpdate = event => {
    this.setState({input: {...this.state.input, todo: event.target.value}})
  }

  urgencyInputUpdate = event => {
    this.setState({input: {...this.state.input, urgency: event.target.value}})
  }

  editInput = (event, i) => {
    const items = this.state.items.slice()
    items[i].todo = event.target.value
    this.setState({items: items})
  }

  editUrgencyInput = (event, i) => {
    const items = this.state.items.slice()
    items[i].urgency = event.target.value
    this.setState({items: items})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.input], 
      input: {todo: '', urgency: 'lightgreen'},
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
                  key={index}
                  index={index}
                  item={item.todo}
                  urgency={item.urgency}
                  editInput={this.editInput}
                  editUrgencyInput={this.editUrgencyInput}
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
          todoInput={this.state.input.todo}
          inputUpdate={this.inputUpdate}
          urgencyInput={this.state.input.urgency}
          urgencyInputUpdate={this.urgencyInputUpdate}/>}
      </div>
    </div>
  );
  }
}

export default App;
