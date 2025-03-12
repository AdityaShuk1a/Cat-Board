import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
function KeyboardType() {
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const content =
    "the quick brown fox jumps over the lazy dog and keeps running towards the endless horizon while the sun sets behind the mountains";

  const [charArray, setCharArray] = useState(
    content.split("").map((char, index) => ({
      id: index,
      char: char,
      visited: false,
      isCorrect: true,
    }))
  );

  useEffect(() => {
    onKeyboardChange(userInput);
  }, [userInput]);
  useEffect(() => {
    gsap.fromTo(
      ".cursorPointer",
      { opacity: 0 },
      {
        duration: 0.5,
        opacity: 1,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  useEffect(() => {
    const handleTabPress = (event) => {
      if (event.key === "Tab") {
        event.preventDefault(); // Prevent default tab behavior (switching focus)
        setUserInput("");
        setCharArray((prev) =>
          prev.map((obj) => ({
            ...obj,
            isCorrect: true,
            visited: false,
          }))
        );
      }
    };

    window.addEventListener("keydown", handleTabPress);

    return () => {
      window.removeEventListener("keydown", handleTabPress);
    };
  }, []);

  const onKeyboardChange = (input) => {
    setCharArray((prevCharArray) =>
      prevCharArray.map((charObj, index) => ({
        ...charObj,
        isCorrect: index < input.length ? input[index] === charObj.char : true,
        visited: index < input.length ? true : true,
      }))
    );
  };

  return (
    <>
      <div
        className="mainContainer relative w-[100%] text-white   flex justify-center"
        style={{
          margin: "2rem 1rem",
          padding: "0 2.2rem",
        }}
      >
        <div className="typeContent w-[100%]  md:w-[80%] text-3xl md:text-2xl  ">
          {charArray.map((item, key) => {
            if (item.id === userInput.length - 1) {
              return (
                <>
                  <span
                    key={key}
                    className={`${
                      item.isCorrect ? "" : "text-red-500"
                    }
                   `}
                  >
                    {item.char}
                  </span>
                  <span
                    className={`cursorPointer ${
                      isTyping ? "opacity-[1]" : "opacity-[0]"
                    }`}
                  >
                    |
                  </span>
                </>
              );
            } else if (
              isTyping &&
              item.id === 0 &&
              item.id === userInput.length
            ) {
              return (
                <>
                  <span className="cursorPointer">|</span>
                  <span
                    key={key}
                    className={`${
                      item.isCorrect ? "" : "text-red-500"
                    }
                   `}
                  >
                    {item.char}
                  </span>
                </>
              );
            } else {
              return (
                <span
                  key={key}
                  className={`${
                    item.isCorrect && item.id < userInput.length ? "text-amber-200" : item.isCorrect ? "" : "text-red-500"
                  }`}
                >
                  {item.char}
                </span>
              );
            }
          })}
        </div>

        <input
          type="text"
          className="absolute top-0 w-[90%] h-[50vh] bg-transparent decoration-0  text-transparent outline-none "
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onClick={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          style={{
            padding: "0rem 2rem",
          }}
        />
      </div>
    </>
  );
}

export default KeyboardType;
