type Props = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  inputName: string;
};

export default function FormInput({ state, setState, text, inputName }: Props) {
  return (
    <div>
      <label htmlFor={inputName}>{text}</label>
      <input
        type="text"
        name={inputName}
        id={inputName}
        value={state}
        onChange={(ev) => setState(ev.target.value)}
      />
    </div>
  );
}
