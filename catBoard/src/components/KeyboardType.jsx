import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import ConfigBar from "./ConfigBar";
import ResultPage from "../Pages/ResultPage";
import Timer from "./Timer";
import { use } from "react";
function KeyboardType() {
  const [Speed, setSpeed] = useState(0);
  const [Accuracy, setAccuracy] = useState(0);
  const [time, setTime] = useState(15);
  const [renderResultPage, setRenderResultPage] = useState(false);
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
    if (userInput.length > 0) setIsTyping(true);
    if (userInput.length == 0) setIsTyping(false);
    if (userInput.length >= content.length) {
      console.log(userInput.length) ;
      setSpeed((userInput.length/(time)) * 10);
      const correctChars = charArray.filter((char) => char.isCorrect).length;
      const accuracy = (correctChars / content.length) * 100
      setAccuracy(accuracy);
      setRenderResultPage(true)};
    onKeyboardChange(userInput);
    console.log(userInput);
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
        setRenderResultPage(false);
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

  const timesUp = () => {
    const userSpeed = ((userInput.length/(time) )* 10) 
    setSpeed(userSpeed);
      const correctChars = charArray.filter((char) => char.isCorrect).length;
      const accuracy = (correctChars / content.length) * 100
      setAccuracy(accuracy);
    setRenderResultPage(true);
  };
  const changeTime = (newTime) => {
    setTime(newTime);
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

  // useEffect(()=>{
  //   if(renderResultPage){
  //     setSpeed(userInput.length/(time/60));
  //     const correctChars = charArray.filter((char) => char.isCorrect).length;
  //     setAccuracy((correctChars / content.length) * 100);
  //   }
  // }, [renderResultPage])

  return (
    <>
      {renderResultPage ? (
        <ResultPage Speed={Speed} Accuracy={Accuracy} />
      ) : (
        <>
          <ConfigBar changeTime={changeTime} />

          <div
            className="mainContainer relative w-[100%] text-white   flex justify-center"
            style={{
              margin: "2rem 1rem",
              padding: "0 2.2rem",
            }}
          >
            <div className="typeContent w-[100%]  md:w-[80%] text-3xl md:text-4xl  ">
              {isTyping ? <Timer Time={time} timesUp={timesUp} /> : ""}
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
        </>
      )}
    </>
  );
}

export default KeyboardType;
