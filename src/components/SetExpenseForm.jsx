import { useState } from "react";
import InputField from "./InputField";
import RadioButtonGroup from "./RadioButtonGroup";
import FormSaveCancelButtons from "./FormSaveCancelButtons";
import style from "./SetExpenseForm.module.css";

export default function SetExpenseForm({
  setExpenseAddBox,
  setCurrentBalance,
  currentBalance,
  setExpenseDetail,
}) {
  const [amount, setAmount] = useState(0);
  const [selectedType, setSelectedType] = useState("expense");
  const [description, setDescription] = useState("");

  return (
    <div>
      <form className={style.form}>
        <InputField
          setAmount={setAmount}
          setExpenseDetail={setExpenseDetail}
          setDescription={setDescription}
        />

        <RadioButtonGroup
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <FormSaveCancelButtons
          setExpenseAddBox={setExpenseAddBox}
          setCurrentBalance={setCurrentBalance}
          currentBalance={currentBalance}
          selectedType={selectedType}
          amount={amount}
          description={description}
          setExpenseDetail={setExpenseDetail}
        />
      </form>
    </div>
  );
}
