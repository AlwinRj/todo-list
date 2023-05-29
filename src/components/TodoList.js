import React, { useState } from "react";
import { List, ListItem, Checkbox, IconButton, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function TodoList() {
const [tasks, setTasks] = useState([]);

const handleAddTask = (event) => {
event.preventDefault();
const newTask = event.target.elements.task.value.trim();
if (newTask !== "") {
setTasks([...tasks, { id: Date.now(), task: newTask, completed: false }]);
event.target.reset();
}
};

const handleToggleCompleted = (id) => {
setTasks(tasks.map((task) => {
if (task.id === id) {
return { ...task, completed: !task.completed };
}
return task;
}));
};

const handleDeleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id));
};

return (
<div className="container">
<form onSubmit={handleAddTask}>
<TextField label="Add new task" name="task" margin="normal" variant="outlined" fullWidth />
<button type="submit">Add</button>
</form>
<List>
{tasks.map((task) => (
<ListItem key={task.id} dense button>
<Checkbox
checked={task.completed}
onChange={() => handleToggleCompleted(task.id)}
/>
<div className={task.completed ? "completed" : ""}>{task.task}</div>
<IconButton onClick={() => handleDeleteTask(task.id)}>
<Delete />
</IconButton>
</ListItem>
))}
</List>
</div>
);
}

export default TodoList;