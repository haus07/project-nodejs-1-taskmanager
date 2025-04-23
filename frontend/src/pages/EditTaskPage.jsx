import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get(`http://localhost:2004/task/${id}`)
      .then(res => setTask(res.data))
      .catch(err => console.error('Error fetching task:', err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:2004/task/${id}`, task)
      .then(() => {
        alert('Task updated successfully');
        window.location.href = '/task'; // Điều hướng về danh sách task sau khi cập nhật thành công
      })
      .catch(err => console.error('Error updating task:', err));
  };

  return (
    <div>
      <h1>Chỉnh sửa Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề:</label>
          <input 
            type="text" 
            value={task.title} 
            onChange={(e) => setTask({ ...task, title: e.target.value })} 
            required 
          />
        </div>
        <div>
          <label>Mô tả:</label>
          <textarea 
            value={task.description} 
            onChange={(e) => setTask({ ...task, description: e.target.value })} 
            required
          ></textarea>
        </div>
        <button type="submit">Cập nhật Task</button>
      </form>
    </div>
  );
}

export default EditTaskPage;
