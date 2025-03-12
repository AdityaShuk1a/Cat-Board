import React from "react";

function Footer() {
  return (
    <>
      <div
        className="w-screen fixed bottom-0 flex justify-center items-center gap-3"
        style={{
          marginBottom: "4rem",
          
        }}
      >
        <div>ShortCuts:</div>
        <div className=" ">
          <span
            className="w-fit bg-[#db886f]"
            style={{
              padding: "0.5vh",
            }}
          >
            tab
          </span>
          <span> - Restart Test</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
