import React, { useEffect, useState } from "react";

const ConfigBar = ({ changeTime }) => {
  const [time, setTime] = useState(15);

  useEffect(() => {
    changeTime(time);
  }, [time]);

  return (
    <>
      <div
        className="configContainer opacity-0 md:opacity-[1] w-screen flex text-2xl justify-center items-center text-white"
        style={{
          padding: "1rem 3rem",
        }}
      >
        <div className="configBar w-fit items-center justify-center text-white">
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
              <div>time</div>
              <div>word</div>
              <div>zen</div>
              <div>custom</div>
            </div>
            <div
              className="timeSettings flex gap-4 items-center justify-center"
              style={{
                padding: "0 2rem",
              }}
            >
              <div
                onClick={() => setTime(15)}
                className={`${time === 15 ? "text-yellow-600" : ""}`}
              >
                15
              </div>
              <div
                onClick={() => setTime(30)}
                className={`${time === 30 ? "text-yellow-600" : ""}`}
              >
                30
              </div>
              <div
                onClick={() => setTime(60)}
                className={`${time === 60 ? "text-yellow-600" : ""} `}
              >
                60
              </div>
              <div
                onClick={() => setTime(120)}
                className={`${time === 120 ? "text-yellow-600" : ""} `}
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
