import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Experience from './pages/Experience';
import Segmentation from './pages/Segmentation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/segmentation" element={<Segmentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
