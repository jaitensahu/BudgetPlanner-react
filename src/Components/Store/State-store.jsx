import { createContext } from "react";

export const StateStore = createContext({
  expenseList: [...JSON.parse(localStorage.getItem("ExpenseList"))],
  handleNewExpense: () => {},
  deleteExpense: () => {},
});
