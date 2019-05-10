import React from 'react';
import TaskList from './TaskList';
import './App.css';

class App extends React.Component {
    state = {
        tasks: []
    };

    addTask = () => {
        let {tasks} = this.state;
        const task = {
            id: tasks.length + 1,
            text: `Task number  ${tasks.length + 1}`
        };
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }));
    };
    tasks;

    removeTask = () => {
        let tasks = [...this.state.tasks];
        tasks.pop();
        this.setState({
            tasks
        })
    };

    clearTasks = () => {
        let tasks = [...this.state.tasks];
        tasks.length = 0;
        this.setState({
            tasks
        })
    };

    render() {
        return (
            <div className="app">
                <h1 className="app_title">TODO APP made by Dorota Kora</h1>
                <div className={"app_buttons"}>
                    <button className="app_buttons-add" onClick={this.addTask}>Add</button>
                    <button className="app_buttons-remove" onClick={this.removeTask}>Remove</button>
                    <button className="app_buttons-clear" onClick={this.clearTasks}>Clear</button>
                </div>
                <TaskList className="app_tasks" tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;
