import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ResultPage from './Pages/ResultPage';
function App() {
  return (
    <Routes>
    
    <Route path="" element={<HomePage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/result" element={<ResultPage />} />
  
    
  </Routes>
  )
}

export default App
