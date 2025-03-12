import React from "react";

const ConfigBar = () => {
  return (
    <>
      <div
        className="configContainer opacity-0 md:opacity-[1] w-screen flex justify-center items-center text-white"
        style={{
          padding: "1rem 3rem",
        }}
      >
        <div className="configBar w-fit items-center justify-center text-white">
          <div className="innerElementContainer bg-[#17181f] flex gap-4 items-center justify-center rounded-[10px]" style={{
            padding: "0.2rem 2rem",
          }} >
            <div className="typeCustom flex gap-4 items-center justify-center   "style={{
            padding: "0 2rem",
          }} >
              <div>time</div>
              <div>word</div>
              <div>zen</div>
              <div>custom</div>
            </div>
            <div className="timeSettings flex gap-4 items-center justify-center" style={{
            padding: "0 2rem",
          }} >
              <div>15</div>
              <div>30</div>
              <div>60</div>
              <div>120</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigBar;
