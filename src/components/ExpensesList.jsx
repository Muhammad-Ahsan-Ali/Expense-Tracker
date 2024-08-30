import ExpensesItem from "./ExpenseItem";

export default function ExpensesList({ expenseDetail, setExpenseDetail }) {
  return (
    <div>
      {expenseDetail.expense.map((expense, index) => (
        <ExpensesItem
          key={index}
          itemIndex={index}
          expense={expense}
          index={index}
          expenseDetail={expenseDetail}
          setExpenseDetail={setExpenseDetail}
        />
      ))}
    </div>
  );
}
