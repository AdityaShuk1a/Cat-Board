import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ConfigBar from "./ConfigBar";
import ResultPage from "../Pages/ResultPage";
import Timer from "./Timer";
import { use } from "react";
import data from "../utils/Content.json";
function KeyboardType() {
  const [mode, setMode] = useState("time");
  const [Speed, setSpeed] = useState(0);
  const [Accuracy, setAccuracy] = useState(0);
  const [time, setTime] = useState(15);
  const [renderResultPage, setRenderResultPage] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const cursorRef = useRef(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [scrollUp, setScrollUp] = useState(0);

  // console.log(data);

  const contentData = data.filter((item, index) => item.time === time);
  // console.log(contentData)

  const content =
    contentData[Math.floor(Math.random() * contentData.length)].content;
  const [charArray, setCharArray] = useState(
    content.split("").map((char, index) => ({
      id: index,
      char: char,
      visited: false,
      isCorrect: true,
    }))
  );

  const getContent = () => {
    const content =
      contentData[Math.floor(Math.random() * contentData.length)].content;
    setCharArray(
      content.split("").map((char, index) => ({
        id: index,
        char: char,
        visited: false,
        isCorrect: true,
      }))
    );
  } 
  useEffect(() => {
    console.log(scrollUp);
  }, [scrollUp]);
  useEffect(() => {
    getContent();
  }, [time]);

  useEffect(() => {
    if (userInput.length > 0) setIsTyping(true);
    if (userInput.length === 0) setIsTyping(false);
  
    if (userInput.length >= charArray.length) {
      console.log("times up userLength exceed");
  
      const correctChars = charArray.filter((char) => char.isCorrect).length;
      const userSpeed = (correctChars / 5) / (time / 60);
      const accuracy = (correctChars / userInput.length) * 100;
  
      setSpeed(userSpeed);
      setAccuracy(accuracy);
      setRenderResultPage(true);
      setLineIndex(0);
    }
  
    onKeyboardChange(userInput);
  }, [userInput]);
  
  useEffect(() => {
    const handleTabPress = (event) => {
      if (event.key === "Tab") {
        setRenderResultPage(false);
        setLineIndex(0);
        getContent();
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
  useEffect(() => {
    const handleShiftEnter = (event) => {
      if (event.key === "Enter" && event.shiftKey) {
        changeMode("time");
      }
    };

    window.addEventListener("keydown", handleShiftEnter);

    return () => {
      window.removeEventListener("keydown", handleShiftEnter);
    };
  }, []);
  const timesUp = () => {
    console.log("times up");
  
    const correctChars = charArray.filter((char) => char.isCorrect).length;
    const userSpeed = (correctChars / 5) / (time / 60);
    const accuracy = (correctChars / userInput.length) * 100;
  
    setSpeed(userSpeed);
    setAccuracy(accuracy);
    setRenderResultPage(true);
    setLineIndex(0);
  };
  
  const changeTime = (newTime) => {
    setTime(newTime);
  };
  const changeMode = (newMode) => {
    console.log(newMode);
    setMode(newMode);
  };
  const onKeyboardChange = (input) => {
    setCharArray((prevCharArray) =>
      prevCharArray.map((charObj, index) => ({
        ...charObj,
        isCorrect: index < input.length ? input[index] === charObj.char : true,
        visited: index < input.length ? true : true,
      }))
    );
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key != "Tab" &&
        e.key != "Ecs" &&
        e.key != "Control" &&
        e.key != "Alt" &&
        e.key != "Shift" &&
        e.key != "Capslock" &&
        e.key != "Meta" &&
        e.key != "Enter" &&
        e.key != "Control + Alt" &&
        e.key != "Control + Shift + Alt" &&
        e.key != "Alt + Tab" &&
        e.key != "Backspace" &&
        e.key != "Control + R"
      ) {
        setUserInput((prevInput) => prevInput + e.key);
      } else if (e.key == "Backspace") {
        setUserInput((prevInput) => prevInput.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      {renderResultPage ? (
        <ResultPage Speed={Speed} Accuracy={Accuracy} />
      ) : (
        <>
          {!isTyping && mode != "zen" ? (
            <ConfigBar changeTime={changeTime} changeMode={changeMode} />
          ) : (
            ""
          )}
          <div
            className={`mainContainer   absolute top-[40%] left-[50%]  -translate-x-1/2 -translate-y-1/2 w-[100%] text-white flex justify-center `}
            style={{
              margin: "0rem 1rem",
              padding: "0 2.2rem",
            }}
          >
            <div className=" typeContent w-[100%]  h-[20vh]   md:w-[80%] text-3xl md:text-4xl  ">
              {isTyping ? <Timer Time={time} timesUp={timesUp} /> : ""}
              <div className="paragraphContainer  relative  ">
                <div
                  className="w-full h-full   overflow-hidden "
                  style={{
                    PointerEvent: "none",
                    // transform: `translateY(-${lineIndex * 3}rem)`,
                  }}
                >
                  {charArray.map((item, key) => {
                    if (item.id === userInput.length - 1) {
                      return (
                        <>
                          <span
                            key={key}
                            className={`${
                              item.isCorrect ? "text-amber-200" : "text-red-500"
                            }
                
                   `}
                          >
                            {item.char}
                          </span>
                          <span
                            ref={cursorRef}
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
                          <span ref={cursorRef} className="cursorPointer">
                            |
                          </span>
                          <span
                            key={key}
                            className={`${item.isCorrect ? "" : "text-red-500"}
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
                            item.isCorrect && item.id < userInput.length
                              ? "text-amber-200"
                              : item.isCorrect
                              ? ""
                              : "text-red-500"
                          }`}
                        >
                          {item.char}
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default KeyboardType;
