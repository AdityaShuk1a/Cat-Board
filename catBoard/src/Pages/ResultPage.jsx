import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function ResultPage({ Speed, Accuracy }) {
  const [speed, setSpeed] = useState((Speed?.toString() || "0").slice(0, 2));
  const [accuracy, setAccuracy] = useState(
    Accuracy === 100 ? "100" : (Accuracy?.toString() || "0").slice(0, 2)
  );

  return (
    <>
      <div
        className="w-screen flex justify-evenly gap-[30px] text-3xl md:text-6xl items-center"
        style={{ 
          marginTop: "9rem",
           padding: "0.5rem",
           [window.innerWidth < 600 ? "marginTop" : ""]: "16rem",
          }}
      >
        <div className="score flex flex-col w-[20%] justify-center">
          <h1 className="accuracy">Speed</h1>
          <h1 className="WPM">{speed}</h1>
          <h1 className="">Accuracy</h1>
          <h1 className="accuracyPercentage">{accuracy}%</h1>
        </div>
        <div className="graph">
          <div className="emoji">
            <img src="" alt="performanceEmoji" />
          </div>
          <div className="performanceRespective w-[80%] flex justify-center">
            <h1 className="performanceStatus">devil</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
