import React from "react";
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import ResultPage from "./Pages/ResultPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
