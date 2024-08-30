import style from "./radioButtonGroup.module.css";
export default function RadioButtonGroup({ selectedType, setSelectedType }) {
  return (
    <div className={style.button_mainConatiner}>
      <div className={style.button_conatiner}>
        <h4>Add Expense</h4>
        <input
          type="radio"
          name="expenseType"
          id="expense"
          checked={selectedType === "expense"}
          onChange={(e) => setSelectedType(e.target.id)}
        />
      </div>
      <div className={style.button_conatiner}>
        <h4>Add to Balance</h4>
        <input
          type="radio"
          name="expenseType"
          id="balance"
          checked={selectedType === "balance"}
          onChange={(e) => setSelectedType(e.target.id)}
        />
      </div>
    </div>
  );
}
