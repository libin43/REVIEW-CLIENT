import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReviewPage } from './pages/ReviewPage';
import { HomePage } from './pages/HomePage';
import { ResultPage } from './pages/ResultPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/review' element={<ReviewPage />} />
          <Route path='/result' element={<ResultPage />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
