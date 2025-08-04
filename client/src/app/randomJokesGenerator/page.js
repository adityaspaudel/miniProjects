// https://official-joke-api.appspot.com/jokes/random/250

"use client";

import React, { useState } from "react";

const RandomJokesGenerator = () => {
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState([]);

  const generateJoke = () => {
    fetchJokes();
  };

  const fetchJokes = async () => {
    try {
      const getData = await fetch(
        "https://official-joke-api.appspot.com/jokes/random/250"
      );
      const parsedData = await getData.json();
      setJokes(parsedData);
      console.log(jokes);
      const randomNum = Math.round(Math.random() * (250 - 1 + 1));
      console.log("randomNum: ", randomNum);

      const selectedRandomJoke = jokes.filter((val, ind) => {
        if (randomNum.id == val) {
          return val;
        } else {
          return [
            {
              setup: "What do you call a belt made out of watches?",
              punchline: "A waist of time.",
            },
          ];
        }
      });

      // setJoke(randomJoke);
      console.log("selectedRandomJoke", selectedRandomJoke);
    } catch (error) {
      console.error("error occurred while fetching data", data);
    }
  };

  return (
    <div>
      <div>RandomJokesGenerator</div>
      <button onClick={generateJoke}>get new Joke</button>
      <>randomJoke: {JSON.stringify(joke)}</>

      {/* <pre>{JSON.stringify(jokes, 2, 2)}</pre> */}
    </div>
  );
};

export default RandomJokesGenerator;
