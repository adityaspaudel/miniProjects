"use client";
import React, { useState } from "react";

const SurveyWebsite = () => {
  const [value, setValue] = useState(1);
  const webDevSurvey = [
    {
      id: 1,
      question: `Which JavaScript framework do you prefer for frontend development?`,
      choices: [`React`, `Vue.js`, `Angular`, `Svelte`, `Other`],
    },
    {
      id: 2,
      question: `How comfortable are you with using ES6+ features in JavaScript?`,
      choices: [
        `Very Comfortable`,
        `Comfortable`,
        `Neutral`,
        `Not Comfortable`,
        `Never Used ES6+`,
      ],
    },
    {
      id: 3,
      question: `Which CSS framework do you use most often?`,
      choices: [`Tailwind CSS`, `Bootstrap`, `Bulma`, `Material UI`, `None`],
    },
    {
      id: 4,
      question: `How often do you use browser developer tools for debugging?`,
      choices: [
        `Daily`,
        `Several times a week`,
        `Occasionally`,
        `Rarely`,
        `Never`,
      ],
    },
    {
      id: 5,
      question: `Which backend technology do you prefer for building web apps?`,
      choices: [
        `Node.js with Express`,
        `Django`,
        `Laravel`,
        `Spring Boot`,
        `Other`,
      ],
    },
    {
      id: 6,
      question: `How do you usually handle state management in React apps?`,
      choices: [
        `Redux Toolkit`,
        `React Context API`,
        `Zustand`,
        `MobX`,
        `Other`,
      ],
    },
    {
      id: 7,
      question: `Which database do you prefer for web development?`,
      choices: [`MongoDB`, `PostgreSQL`, `MySQL`, `SQLite`, `Other`],
    },
    {
      id: 8,
      question: `How familiar are you with REST API development?`,
      choices: [
        `Expert`,
        `Advanced`,
        `Intermediate`,
        `Beginner`,
        `Never Used REST APIs`,
      ],
    },
    {
      id: 9,
      question: `Do you use TypeScript in your projects?`,
      choices: [`Always`, `Often`, `Sometimes`, `Rarely`, `Never`],
    },
    {
      id: 10,
      question: `Which hosting/deployment service do you use most?`,
      choices: [`Vercel`, `Netlify`, `GitHub Pages`, `AWS`, `Other`],
    },
    { id: 11, question: `thank you`, choices: [null] },
  ];

  console.log(webDevSurvey);

  const [selectedValue, setSelectedValue] = useState(""); // Initialize with an empty string or a default value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the state with the new selected value
  };

  return (
    <div className="flex flex-col justify-center items-center bg-sky-100 w-screen h-screen ">
      <div className="flex flex-col gap-2 justify-center items-center bg-yellow-600 border-green-400 w-1/2 h-1/2 border-2 rounded-xl p-4">
        <div className="text-4xl font-bold">Survey Website</div>
        <br />

        <div>
          {webDevSurvey
            .filter((val, ind) => {
              if (val.id === value) {
                return <div>{val.question}</div>;
              }
            })
            .map((val, ind) => (
              <div key={ind}>
                <div>{val.question}</div>
                {val && (
                  <select
                    className="text-black"
                    name="surveyQuestions"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    {val.choices[0] && (
                      <option value={`${val.choices[0]}`}>
                        {val.choices[0]}
                      </option>
                    )}
                    {val.choices[1] && (
                      <option value={`${val.choices[1]}`}>
                        {val.choices[1]}
                      </option>
                    )}
                    {val.choices[2] && (
                      <option value={`${val.choices[2]}`}>
                        {val.choices[2]}
                      </option>
                    )}
                    {val.choices[3] && (
                      <option value={`${val.choices[3]}`}>
                        {val.choices[3]}
                      </option>
                    )}
                  </select>
                )}
              </div>
            ))}
        </div>
        <div className="flex flex-col justify-start content-start items-start  align-start">
          {value <= 11 && (
            <button
              className="text-sm bg-green-300 hover:bg-green-500 rounded-lg p-2"
              onClick={(e) => {
                e.preventDefault();
                setValue(value + 1);
                setSelectedValue();
              }}
            >
              submit: {value}
            </button>
          )}
        </div>
        <br />
        {selectedValue && <p>You selected: {selectedValue}</p>}
      </div>
    </div>
  );
};

export default SurveyWebsite;
