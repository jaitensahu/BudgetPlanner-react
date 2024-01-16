import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ShowBudget from "./Components/ShowBudget/ShowBudget";
import ShowExpenseList from "./Components/ShowExpenseList/ShowExpenseList";
import AddExpense from "./Components/AddExpense/AddExpense";
import { StateStore } from "./Components/Store/State-store";
import { useState } from "react";

function App() {
  // useState Variable for Expense List
  let [expenseList, setExpenseList] = useState(
    JSON.parse(localStorage.getItem("ExpenseList")) != null
      ? JSON.parse(localStorage.getItem("ExpenseList"))
      : []
  );
  let [total, setTotal] = useState(getTotal());

  // Function to Add New Expense
  function handleNewExpense(expName, amount) {
    if (expName == " " || amount== "") {
      alert("Please enter expense data");
      return;
    }
      setExpenseList((prev) => [
        ...expenseList,
        { expense: expName, cost: amount },
      ]);
    localStorage.setItem(
      "ExpenseList",
      JSON.stringify([...expenseList, { expense: expName, cost: amount }])
    );
    setTotal(getTotal());
  }

  function getTotal() {
    let newTotal = 0;
    JSON.parse(localStorage.getItem("ExpenseList")).map((ele) => {
      newTotal = newTotal + Number(ele.cost);
    });
    return newTotal;
  }

  // Handle Delete function
  function deleteExpense(deletedIdx) {
    let newList = expenseList.filter((ele, idx) => {
      return deletedIdx != idx;
    });
    setExpenseList((prev) => [...newList]);
    localStorage.setItem("ExpenseList", JSON.stringify(newList));
    setTotal(getTotal());
  }

  return (
    <div className="container">
      <StateStore.Provider
        value={{ expenseList, handleNewExpense, deleteExpense, total }}
      >
        <ShowBudget />
        <ShowExpenseList />
        <AddExpense />
      </StateStore.Provider>
    </div>
  );
}

export default App;
