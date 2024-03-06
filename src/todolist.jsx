// ToDoList.jsx
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="add-button" onClick={handleAddTask}>+</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task">{task}</span>
            <button className="remove-button" onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
