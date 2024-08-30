import { useState } from "react";
import Header from "./components/Header";
import style from "./app.module.css";
import CurrentBalance from "./components/CurrentBalance";
import CurrentBalanceOuterContainer from "./components/CurrentBalanceOuterContainer";
import CurrentBalanceInnerContainer from "./components/CurrentBalanceInnerContainer";
import AddExpenseButton from "./components/AddExpenseButton";
import AddExpenseConatiner from "./components/AddExpenseConatiner";
import ExpensesList from "./components/ExpensesList";
import EmptyStateMessage from "./components/EmptyStateMessage";
function App() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [expenseAddBox, setExpenseAddBox] = useState(false);
  const [expenseDetail, setExpenseDetail] = useState({
    expense: [],
    description: [],
    expenseType: [],
  });

  return (
    <div className="App">
      <Header />
      <CurrentBalanceOuterContainer>
        <CurrentBalanceInnerContainer>
          <CurrentBalance currentBalance={currentBalance} />
        </CurrentBalanceInnerContainer>
        <CurrentBalanceInnerContainer>
          <AddExpenseButton setExpenseAddBox={setExpenseAddBox} />
        </CurrentBalanceInnerContainer>
      </CurrentBalanceOuterContainer>
      <AddExpenseConatiner
        expenseAddBox={expenseAddBox}
        setExpenseAddBox={setExpenseAddBox}
        setCurrentBalance={setCurrentBalance}
        currentBalance={currentBalance}
        setExpenseDetail={setExpenseDetail}
      />
      <EmptyStateMessage expenseDetail={expenseDetail} />
      <ExpensesList
        expenseDetail={expenseDetail}
        setExpenseDetail={setExpenseDetail}
      />
    </div>
  );
}

export default App;
