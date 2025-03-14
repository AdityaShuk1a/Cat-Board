import React, { useEffect, useState } from "react";

const ConfigBar = ({ changeTime, changeMode }) => {
  const [time, setTime] = useState(15);
  const [mode, setMode] = useState("time");

  useEffect(() => {
    changeTime(time);
    changeMode(mode);
  }, [time, mode]);

  return (
    <>
      <div
        className="configContainer opacity-0 md:opacity-[1] w-screen flex text-2xl justify-center items-center  text-white"
        style={{
          padding: "1rem 3rem",
        }}
      >
        <div className="configBar w-fit items-center justify-center ">
          <div
            className="innerElementContainer bg-[#17181f] flex gap-4 items-center justify-center rounded-[10px]"
            style={{
              padding: "0.2rem 2rem",
            }}
          >
            <div
              className="typeCustom flex gap-4 items-center justify-center   "
              style={{
                padding: "0 2rem",
              }}
            >
              <div
                className="hover:text-gray-500"
                onClick={() => setMode("time")}
              >
                time
              </div>
              <div
                className="hover:text-gray-500"
                onClick={() => setMode("word")}
              >
                word
              </div>
              <div
                className="hover:text-gray-500"
                onClick={() => setMode("zen")}
              >
                zen
              </div>
              <div
                className="hover:text-gray-500"
                onClick={() => setMode("custom")}
              >
                custom
              </div>
            </div>
            <div
              className="timeSettings flex gap-4 items-center justify-center"
              style={{
                padding: "0 2rem",
              }}
            >
              <div
                onClick={() => setTime(15)}
                className={`${
                  time === 15 ? "text-yellow-600" : ""
                } hover:text-gray-500 `}
              >
                15
              </div>
              <div
                onClick={() => setTime(30)}
                className={`${
                  time === 30 ? "text-yellow-600" : ""
                } hover:text-gray-500`}
              >
                30
              </div>
              <div
                onClick={() => setTime(60)}
                className={`${
                  time === 60 ? "text-yellow-600" : ""
                } hover:text-gray-500`}
              >
                60
              </div>
              <div
                onClick={() => setTime(120)}
                className={`${
                  time === 120 ? "text-yellow-600" : ""
                } hover:text-gray-500`}
              >
                120
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigBar;
