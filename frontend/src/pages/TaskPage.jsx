import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2004/task')
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:2004/task/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(err => console.error('Error deleting task:', err));
  };

  return (
    <div>
      <h1>Danh sách Task</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.name}
            <button onClick={() => deleteTask(task._id)}>Xóa</button>
            <button onClick={() => window.location.href = `/task/edit/${task._id}`}>Sửa</button>
          </li>
        ))}
      </ul>
      <button onClick={() => window.location.href = '/task/create'}>Tạo Task</button>
    </div>
  );
}

export default TaskPage;
