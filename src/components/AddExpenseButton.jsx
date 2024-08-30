import { useState } from "react";
import style from "./addExpenseButton.module.css";
export default function AddExpenseButton({ setExpenseAddBox }) {
  return (
    <div>
      <button
        className={style.button}
        onClick={() => {
          setExpenseAddBox(true);
        }}
      >
        ADD
      </button>
    </div>
  );
}
