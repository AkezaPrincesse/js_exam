import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/Tasklist';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default App;