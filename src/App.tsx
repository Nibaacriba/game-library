import GameCard from "./components/game-card";
import NewGameForm from "./components/new-game-form";
import useGameCollection from "./hooks/use-game-collection";

export type Game = {
  title: string;
  cover: string;
  id?: number;
};

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();
  return (
    <div>
      <h1>Game Library</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <GameCard
            game={game}
            key={game.id}
            onRemove={() => game.id && removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}
