import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ConfigBar from "../components/ConfigBar";
import KeyboardType from "../components/KeyboardType";
import Footer from "../components/Footer";
import ResultPage from "./ResultPage";
function HomePage() {
  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />

        <KeyboardType />

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
