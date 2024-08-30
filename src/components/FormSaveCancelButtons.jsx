import style from "./formSaveCancelButtons.module.css";

export default function FormSaveCancelButtons({
  setExpenseAddBox,
  setCurrentBalance,
  currentBalance,
  selectedType,
  amount,
  description,
  setExpenseDetail,
}) {
  function trackExpense(e) {
    e.preventDefault();
    if (selectedType === "expense") {
      setCurrentBalance(currentBalance - amount);
    } else {
      setCurrentBalance(currentBalance + amount);
    }
    if (amount !== 0) {
      setExpenseDetail((prevDetail) => ({
        ...prevDetail,
        expense: [amount, ...prevDetail.expense],
        description: [description, ...prevDetail.description],
        expenseType: [selectedType, ...prevDetail.expenseType],
      }));
    }
  }

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          setExpenseAddBox(false);
        }}
      >
        Cancel
      </button>
      <button
        onClick={(e) => {
          trackExpense(e);
          setExpenseAddBox(false);
        }}
      >
        Save Expense
      </button>
    </div>
  );
}
