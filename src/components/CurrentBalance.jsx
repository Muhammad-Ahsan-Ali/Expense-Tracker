import style from "./currentBalance.module.css";

export default function CurrentBalance({ currentBalance }) {
  return (
    <div className={style.balance}>
      Balance: $
      <span
        className={
          currentBalance >= 0 ? style.amount_positive : style.amount_negative
        }
      >
        {currentBalance}
      </span>
    </div>
  );
}
