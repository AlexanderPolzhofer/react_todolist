import React, { Component } from 'react';

class TaskAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputvalue: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            inputvalue: event.target.value
        })
    }

    addTask = () => {
        this.props.onAddedTask(this.state.inputvalue)
    }


    render() {
        return (<div>
            <input type="text" inputvalue={this.state.inputvalue} onChange={this.handleChange} />
            <button onClick={this.addTask}>submit</button>
        </div>)
    }
}

export default TaskAdder;