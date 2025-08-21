"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { hydrateRoot } from "react-dom/client";

const HangmanGame = () => {
  const [count, setCount] = useState(0);

  // const [imageAttributes, setImageAttributes] = useState();
  const [question, setQuestion] = useState([
    "_",
    "H",
    "_",
    "I",
    "S",
    "_",
    "I",
    "A",
    "_",
  ]);

  const answer = ["C", "H", "R", "I", "S", "T", "I", "A", "N"];
  // const question = ["C", "_", "I", "_", "T", "_", "_", "N"];
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  // const handleCount = () => {
  // 	setCount(count + 1);
  // };
  const handleClick = (props) => {
    if (answer.includes(props)) {
      const currentQuestion = [...question];

      const id = answer.indexOf(props);
      currentQuestion[id] = props;
      //set the output as new question
      setQuestion(currentQuestion);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (count >= 7) {
      alert("Game Over");
    }
  }, [count]);

  const imgLink = {
    img1: "/hangman-images/hangman-1.svg",
    img2: "/hangman-images/hangman-2.svg",
    img3: "/hangman-images/hangman-3.svg",
    img4: "/hangman-images/hangman-4.svg",
    img5: "/hangman-images/hangman-5.svg",
    img6: "/hangman-images/hangman-6.svg",
    img7: "/hangman-images/lost.gif",
    img8: "/hangman-images/victory.gif",
  };

  // Object.values(imgLink).map((item) => {
  // 	document.getElementsByClassName("imageHangman")[0].src = item;
  // });
  if (question.toString() === answer.toString()) {
    alert("Congratulations! you won!!");
    document.getElementsByClassName("keyboard1")[0].style = "display:none";
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/victory.gif";
  }
  if (count === 1) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/hangman-1.svg";
  }
  if (count === 2) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/hangman-2.svg";
  }
  if (count === 3) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/hangman-3.svg";
  }
  if (count === 4) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/hangman-4.svg";
  }
  if (count === 5) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/hangman-5.svg";
  }
  if (count === 6) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/hangman-6.svg";
  }
  if (count > 6) {
    document.getElementsByClassName("imageHangman")[0].src =
      "/hangman-images/lost.gif";

    document.getElementsByClassName("btn1")[0].style = "display:none";
    document.getElementsByClassName("keyboard1")[0].style = "display:none";
  }

  return (
    <div className="flex justify-center items-center gap-8 bg-slate-500 h-screen w-screen">
      <div className="flex flex-col gap-4 content-center items-center">
        <h1>HangmanGame</h1>
        <div>
          <div className="text-[50px]">{question}</div>
          <div className="text-[14px] text-green-200 italic">
            Hint: religion
          </div>
        </div>
        <div className="flex flex-col gap-4 keyboard1">
          {keyboardKeys.map((row, ind) => {
            // return <span>{row} </span>;
            return (
              <div className="flex gap-4" key={ind}>
                {row.map((key, i) => {
                  return (
                    <span
                      key={i}
                      onClick={() => handleClick(key)}
                      className="flex gap-4 h-10 w-10 bg-red-400 text-center p-8 hover:bg-green-400 "
                    >
                      {key}
                    </span>

                    // onClick={() => handleClick(key)}
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-blue-100  flex flex-col justify-center items-center ">
        <button
          className="btn1"
          // onClick={handleClick}
        >
          Here, Hangman is hanged
        </button>
        <div>{count}</div>
        <Image
          className=" flex imageHangman justify-center items-center"
          src="/hangman-images/hangman-0.svg"
          alt=""
          height={400}
          width={400}
        />
        {question}
      </div>
    </div>
  );
};

export default HangmanGame;
