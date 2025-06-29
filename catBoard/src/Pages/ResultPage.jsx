import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function ResultPage({ Speed, Accuracy, mode }) {
  const [speed, setSpeed] = useState((Speed?.toString() || "0").slice(0, 2));
  const [accuracy, setAccuracy] = useState(
    Accuracy === 100 ? "100" : (Accuracy?.toString() || "0").slice(0, 2)
  );
  const [emojiData, setEmojiData] = useState({ emoji: "😶", name: "neutral" });

  useEffect(() => {
    const emojiOptions = [
      { emoji: "🤓", name: "nerd", range: [0, 50] },
      { emoji: "🦁", name: "beast", range: [60, 70] },
      { emoji: "😈", name: "devil", range: [71, 90] },
      { emoji: "🗿", name: "sigma", range: [91, Infinity] },
    ];

    const getEmojiData = (speed) => {
      return (
        emojiOptions.find(
          (option) => speed >= option.range[0] && speed <= option.range[1]
        ) || { emoji: "😶", name: "neutral" }
      );
    };

    setEmojiData(getEmojiData(speed));
  }, [speed]);

  return (
    <>
      <div className="flex justify-center w-full">
        <div
          className="text-[#f4ceb0] w-[80%] font-mono"
          style={{
            backgroundColor: "",
            padding: "2.5rem 1.5rem",
          }}
        >
          <div
            className="flex flex-col md:flex-row justify-between items-center mx-auto"
            style={{ gap: "2rem" }}
          >
            {/* Left Stats */}
            <div
              className="text-left w-full md:w-[20%]"
              style={{ marginBottom: "2rem", marginTop: "1rem" }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <p className="text-[#f58f7c] uppercase text-sm">{mode == "word" ? "wpm" : "cpm"}</p>
                <p className="text-5xl md:text-7xl font-bold">{speed}</p>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <p className="text-[#f58f7c] uppercase text-sm">acc</p>
                <p className="text-5xl md:text-7xl font-bold">{accuracy}%</p>
              </div>
              <div className="text-sm text-[#c0a88c]" style={{ marginTop: "1.5rem" }}>
                <p>test type</p>
                <p>time 15</p>
                <p>english 25k</p>
              </div>
            </div>

            {/* Center Graph */}
            <div className="w-full md:w-[60%]">
              <div
                className="w-full h-48 rounded-xl flex items-center justify-center text-[#f58f7c]"
                style={{
                  backgroundColor: "#1c1c1f",
                }}
              >
                <p className="text-sm">[Performance graph placeholder]</p>
              </div>

              <div
                className="grid grid-cols-3 text-center text-sm"
                style={{ marginTop: "1.5rem", gap: "1.5rem" }}
              >
                <div>
                  <p className="uppercase text-[#f58f7c]">raw</p>
                  <p className="text-xl md:text-4xl font-bold text-[#f4ceb0]">54</p>
                </div>
                <div>
                  <p className="uppercase text-[#f58f7c]">characters</p>
                  <p className="text-lg md:text-3xl font-bold text-[#f4ceb0]">
                    66 / 1 / 0 / 0
                  </p>
                </div>
                <div>
                  <p className="uppercase text-[#f58f7c]">consistency</p>
                  <p className="text-xl md:text-4xl font-bold text-[#f4ceb0]">59%</p>
                </div>
              </div>
            </div>

            {/* Right Emoji + Time */}
            <div className="text-center w-full md:w-[20%]">
              <div className="text-6xl md:text-8xl" style={{ marginBottom: "1rem" }}>
                {emojiData.emoji}
              </div>
              <h1 className="uppercase tracking-widest text-[#f58f7c]">
                {emojiData.name}
              </h1>
              <div
                className="text-sm text-[#c0a88c]"
                style={{ marginTop: "1.5rem" }}
              >
                <p>time</p>
                <p className="text-xl md:text-3xl font-bold text-[#f4ceb0]">15s</p>
                <p>00:00:15 session</p>
              </div>
            </div>
          </div>

          {/* Footer Icons (static) */}
          <div
            className="flex justify-center text-[#f58f7c] text-xl"
            style={{ marginTop: "3rem", gap: "2rem" }}
          >
            <span>⏩</span>
            <span>🔁</span>
            <span>⚠️</span>
            <span>📊</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
