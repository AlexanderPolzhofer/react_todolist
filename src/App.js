import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTask = (value) => {
    let todo = {
      id: 5,
      title: value,
      done: false
    }

    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos
    })
  }

  onDeleteTask = (id) => {
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === id);

    todos.splice(index, 1);
    this.setState({
      todos: todos
    })
    alert("Todoitem has been deleted!");
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          todos: json
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TaskAdder onAddedTask={this.addTask} />
        <TodoList todos={this.state.todos} onDelete={this.onDeleteTask} />
      </div>
    )
  }
}

export default App;
