import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/HomePage/HomePage';
import NewBookPage from './pages/user/NewBookPage/NewBookPage';
import ViewBookPage from './pages/user/ViewBookPage/ViewBookPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/add_book' element={<NewBookPage />} />
          <Route path='/view_book' element={<ViewBookPage />} />

        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
