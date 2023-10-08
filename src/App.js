import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReviewPage } from './pages/ReviewPage';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />

          <Route path='/add_review' element={<ReviewPage />} />

        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
