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
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-2">🎴 Memory Game</h1>
      <button
        onClick={shuffleCards}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-2 hover:bg-blue-600"
      >
        New Game
      </button>
      <p className="mb-4">Turns: {turns}</p>

      {/* Game board using flexbox */}
      <div className="flex flex-wrap justify-center gap-3 max-w-xs">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleChoice(card)}
            className={`w-16 h-16 flex items-center justify-center border-2 rounded cursor-pointer select-none text-2xl 
              ${
                card === firstChoice || card === secondChoice || card.matched
                  ? "bg-white"
                  : "bg-gray-700"
              }`}
          >
            {card === firstChoice || card === secondChoice || card.matched
              ? card.src
              : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}
