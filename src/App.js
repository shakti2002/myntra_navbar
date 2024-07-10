import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import JoinPage from './components/JoinPage';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/join/:section" element={<JoinPage />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
