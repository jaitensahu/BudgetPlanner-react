import { useContext } from "react";
import { StateStore } from "../Store/State-store";

const ShowBudget = () => {
  const contextData = useContext(StateStore);

  let budget = 5000;
  return (
    <div className="BudgetContainer">
      <h1>My Budget Planner</h1>
      <div className="d-flex justify-content-around">
        <p className="btn btn-primary btn-md ">Budget: Rs.{budget}</p>
        <p className="btn btn-primary btn-md ">
          Remaining: Rs.{budget - contextData.total}
        </p>
        <p className="btn btn-primary btn-md ">
          Spant so far{contextData.total}
        </p>
      </div>
    </div>
  );
};

export default ShowBudget;
