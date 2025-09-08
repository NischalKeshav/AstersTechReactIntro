
import Navbar from './components/Navbar'

import './App.css'
import {TButton} from './components/ThemeSwitching'
import WhatareComponents from './components/WhatareComponents'
import HooksPage from './components/Pages/HooksPage'

import CPage from './components/Pages/CPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    
      <Navbar /> 
      <Routes>
        <Route path="/" element={<CPage />} />
        <Route path="/Components" element={<CPage />} />
        <Route path="/Hooks" element={<HooksPage />} />
        <Route path="/Exercises" element={<WhatareComponents />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
