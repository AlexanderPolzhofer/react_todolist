import React, { Component } from 'react';
import Todo from './Todo';
import styleTodoList from "./TodoList.module.css";

class TodoList extends Component {

    getAllTodos() {
        const widgets = [];

        this.props.todos.forEach(todo => {
            widgets.push(<Todo title={todo.title} isDone={todo.done} id={todo.id} onDelete={this.props.onDelete}/>
            )
        });
        return widgets;
    }

    render() {
        return (
            <div className={styleTodoList.center}>
                <div className={styleTodoList.container}>
                    {this.getAllTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;