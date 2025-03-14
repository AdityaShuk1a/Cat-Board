import React from "react";

function Footer() {

  const shortcuts = [
    {
      id : 1,
      shortcut : "tab",
      description : "Restart Test"
    },
    {
      id : 2,
      shortcut : "Shift + Enter",
      description : "Escape Zen Mode"
    }
  ]

  return (
    <>
      <div
        className="w-screen fixed bottom-0 flex flex-col md:flex-row justify-center items-center gap-3"
        style={{
          marginBottom: "4rem",
          
        }}
      >
        <div>ShortCuts:</div>
        {shortcuts.map((value) => {
          return (
            <div className=" ">
          <span
            className="w-fit bg-[#db886f] rounded-[10px]"
            style={{
              padding: "0.5vh",
            }}
          >
            {value.shortcut}
          </span>
          <span> - {value.description}</span>
        </div>
          )
          
        })}
        
      </div>
    </>
  );
}

export default Footer;
