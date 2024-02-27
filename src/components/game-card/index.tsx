import { Game } from "../../App";

type Props = {
  game: Game;
  onRemove: () => void;
};

export default function GameCard({ game, onRemove }: Props) {
  return (
    <div>
      <img src={game.cover} alt={game.title} />
      <div>
        <h2>{game.title}</h2>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}
