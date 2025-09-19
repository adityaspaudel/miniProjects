"use client";
import React, { useState, useEffect } from "react";

const cardImages = [
  { src: "🍎", matched: false },
  { src: "🍌", matched: false },
  { src: "🍇", matched: false },
  { src: "🍊", matched: false },
  { src: "🍉", matched: false },
  { src: "🍒", matched: false },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setFirstChoice(null);
    setSecondChoice(null);
    setCards(shuffled);
    setTurns(0);
  };

  // Handle choice
  const handleChoice = (card) => {
    if (!disabled) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    }
  };

  // Compare two selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prev) =>
          prev.map((card) =>
            card.src === firstChoice.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 800);
      }
    }
  }, [firstChoice, secondChoice]);

  // Reset choices
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // Start game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <h1>🎴 Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>

      <div>
        {cards.map((card) => (
          <span key={card.id} onClick={() => handleChoice(card)}>
            {card === firstChoice || card === secondChoice || card.matched
              ? card.src
              : "❓"}
          </span>
        ))}
      </div>
    </div>
  );
}
