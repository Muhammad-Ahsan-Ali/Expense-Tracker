import style from "./currentBalanceOuterContainer.module.css";
export default function CurrentBalanceOuterContainer({ children }) {
  return <div className={style.outer_container}>{children}</div>;
}
