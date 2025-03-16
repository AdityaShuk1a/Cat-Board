import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function ResultPage({ Speed, Accuracy }) {
  const [speed, setSpeed] = useState((Speed?.toString() || "0").slice(0, 2));
  const [accuracy, setAccuracy] = useState(
    Accuracy === 100 ? "100" : (Accuracy?.toString() || "0").slice(0, 2)
  );
  const [emojiData, setEmojiData] = useState({ emoji: "😶", name: "neutral" });

  useEffect(() => {
    const emojiOptions = [
      { emoji: "🤓", name: "nerd", range: [0, 50] },
      { emoji: "🦁", name: "beat", range: [60, 70] },
      { emoji: "😈", name: "devil", range: [71, 90] },
      { emoji: "🗿", name: "sigma", range: [91, Infinity] }
    ];

    const getEmojiData = (speed) => {
      return (
        emojiOptions.find(option => speed >= option.range[0] && speed <= option.range[1]) || 
        { emoji: "😶", name: "neutral" }
      );
    };

    setEmojiData(getEmojiData(speed));
  }, [speed]);

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
        <div className="graph flex flex-col gap-9  md:gap-9 ">
          <div className="emoji">
            <span className="emoji text-7xl md:text-9xl" aria-label={emojiData.name}>
              {emojiData.emoji}
            </span>
          </div>
          <div className="performanceRespective w-[80%] flex justify-center">
            <h1 className="performanceStatus font-bold ">{(emojiData.name).toUpperCase()}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;

