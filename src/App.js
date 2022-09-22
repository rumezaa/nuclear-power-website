import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from "./components/pages/LandingPage"
import AboutPage from './components/pages/AboutPage';
import PrespectivePage from './components/pages/PrespectivePage';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about-nuclear-tech' element={<AboutPage />} />
      <Route path='/response-to-nuclear-tech' element={<PrespectivePage />} />
    </Routes>
  </Router>
  );
}

export default App;
