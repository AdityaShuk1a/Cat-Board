import React, { useEffect, useState } from "react";

function Timer({ Time, timesUp }) {
  const [val, setVal] = useState(Time);
  useEffect(() => {
    if (val < 1) {
      timesUp();
      return;
    }

    const interval = setInterval(() => {
      if (val < 1) {
        clearInterval(interval);
      }
      setVal(val - 1);
    }, 1 * 1000);
    return () => clearInterval(interval);
  }, [val]);
  return (
    <>
      <div
        className="mainContainer w-screen flex justify-start "
        style={{
          padding: "2rem 1rem",
        }}
      >
        <h1 className="time">{val}</h1>
      </div>
    </>
  );
}

export default Timer;
