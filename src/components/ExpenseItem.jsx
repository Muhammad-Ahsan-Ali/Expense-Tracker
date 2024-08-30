import style from "./expenseItem.module.css";
export default function ExpensesItem({
  itemIndex,
  expense,
  index,
  expenseDetail,
  setExpenseDetail,
}) {
  function removeItem() {
    setExpenseDetail((prevData) => ({
      ...prevData,
      expense: prevData.expense.filter(
        (expenseItem, index) => index !== itemIndex
      ),
      description: prevData.description.filter(
        (descriptionItem, index) => index !== itemIndex
      ),
      expenseType: prevData.expenseType.filter(
        (itemExpenseType, index) => index !== itemIndex
      ),
    }));
  }

  return (
    <div className={style.item_container}>
      <h2 className={style.description}>
        {expenseDetail.description[index]
          ? `${expenseDetail.description[index]}: `
          : "Miscellaneous Amount : "}
        ${" "}
        <span
          className={
            expenseDetail.expenseType[index] === "expense"
              ? style.amount_negative
              : style.amount_positive
          }
        >
          {expense}
        </span>
      </h2>
      <button onClick={removeItem} className={style.button}>
        Remove
      </button>
    </div>
  );
}
