import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Interview from "./pages/Interview.jsx";
import LearnMore from "./pages/LearnMore.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />            
        <Route path="/login" element={<Login />} />      
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/interview" element={<Interview />} />
        <Route path="/learnMore" element={<LearnMore />} />  
      </Routes>
    </Router>
  );
}

export default App;