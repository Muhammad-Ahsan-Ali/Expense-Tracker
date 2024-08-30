import style from "./inputfield.module.css";
export default function Inputfield({ setDescription, setAmount }) {
  return (
    <div className={style.input_field}>
      <input
        onChange={(e) => {
          let value =
            e.target.value.trim() === ""
              ? "Miscellaneous Amount"
              : e.target.value;
          setDescription(value);
        }}
        placeholder="Description"
        type="text"
      />
      <input
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        type="number"
        placeholder="Amount"
      />
    </div>
  );
}
