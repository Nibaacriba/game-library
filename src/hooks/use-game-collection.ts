import { useState } from "react";
import { Game } from "../App";

export default function useGameCollection() {
  const [games, setGames] = useState<Game[]>(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (storedGames) return JSON.parse(storedGames);
    return [];
  });

  const addGame = ({ title, cover }: Game) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((currentState) => {
      const newState = [...currentState, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id: number) => {
    setGames((currentState) => {
      const newState = currentState.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return {
    games,
    addGame,
    removeGame,
  };
}
