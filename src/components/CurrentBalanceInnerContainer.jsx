import styles from "./currentBalanceInnerContainer.module.css";
export default function CurrentBalanceInnerContainer({ children }) {
  return <div className={styles.inner_container}>{children}</div>;
}
