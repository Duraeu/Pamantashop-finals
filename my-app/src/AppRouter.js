// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AuthComponent from './components/AuthComponent';


const AppRouter = () => { 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<AuthComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
