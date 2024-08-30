import style from "./emptyStateMessage.module.css";
export default function EmptyStateMessage({ expenseDetail }) {
  if (expenseDetail.expense.length === 0) {
    return (
      <div>
        <h1 className={style.exmpty_list_msg}>Add Expense in the list</h1>
      </div>
    );
  } else {
    return null;
  }
}
