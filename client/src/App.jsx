import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import QuizPage from './pages/QuizPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;