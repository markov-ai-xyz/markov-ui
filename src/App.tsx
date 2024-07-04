import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import KnowledgeBase from './components/KnowledgeBase';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/knowledge-base" element={<KnowledgeBase />} />
    </Routes>
  );
}

export default App;
