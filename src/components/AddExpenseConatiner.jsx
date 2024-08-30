import SetExpenseForm from "./SetExpenseForm";
export default function AddExpenseConatiner({
  expenseAddBox,
  setExpenseAddBox,
  setCurrentBalance,
  currentBalance,
  setExpenseDetail,
}) {
  if (expenseAddBox) {
    return (
      <div>
        <SetExpenseForm
          setExpenseAddBox={setExpenseAddBox}
          setCurrentBalance={setCurrentBalance}
          currentBalance={currentBalance}
          setExpenseDetail={setExpenseDetail}
        />
      </div>
    );
  } else {
    return null;
  }
}
