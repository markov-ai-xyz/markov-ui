import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<SignIn />} />
    </Routes>
  );
}

export default App;
