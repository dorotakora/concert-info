import React from 'react';
import './TaskList.css';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <li key={task.id} className="tasks_list-item">{task.text}</li>);
    return (
        <ul className="tasks_list">
            {tasks}
        </ul>
    );
};

export default TaskList;