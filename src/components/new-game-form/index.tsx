import { FormEvent, useState } from "react";
import { Game } from "../../App";
import FormInput from "../form-input";

type Props = {
  addGame: ({ title, cover }: Game) => void;
};

export default function NewGameForm({ addGame }: Props) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (title !== "" && cover !== "") addGame({ title, cover });
    setTitle("");
    setCover("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        state={title}
        setState={setTitle}
        text="Title:"
        inputName="title"
      />
      <FormInput
        state={cover}
        setState={setCover}
        text="Cover:"
        inputName="cover"
      />
      <button type="submit">Add to library</button>
    </form>
  );
}
