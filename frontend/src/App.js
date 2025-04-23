import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import './App.css'; // Đảm bảo đường dẫn đúng


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} /> {/* Đặt route mặc định cho trang chủ */}
        <Route path="/task" element={<TaskPage />} />
        <Route path="/task/create" element={<CreateTaskPage />} />
        <Route path="/task/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
