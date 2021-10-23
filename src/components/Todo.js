import React, { Component } from 'react';
import styleTodo from "./Todo.module.css";
import { GrClose } from "react-icons/gr";

class Todo extends Component {

    setDone = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        return (<div className={styleTodo.container}>
            <p>{this.props.title}</p>
            <p>{this.props.isDone}</p>
            <p onClick={this.setDone}><GrClose /></p>
        </div>)
    }
}

export default Todo;