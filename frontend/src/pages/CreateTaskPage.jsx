import React, { useState } from 'react';
import axios from 'axios';

function CreateTaskPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description };
    
    axios.post('http://localhost:2004/task', newTask)
      .then(() => {
        alert('Task created successfully');
        window.location.href = '/task'; // Điều hướng về danh sách task sau khi tạo thành công
      })
      .catch(err => console.error('Error creating task:', err));
  };

  return (
    <div>
      <h1>Tạo Task Mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tiêu đề:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Mô tả:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <button type="submit">Tạo Task</button>
      </form>
    </div>
  );
}

export default CreateTaskPage;
