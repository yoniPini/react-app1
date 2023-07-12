import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpanseList from "./ExpenseList";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "milk",
      amount: 2,
      category: "Groceries",
    },
  ]);
  const [filter, setFilter] = useState("");
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <ExpenseFilter
        onSelect={(c) => {
          setFilter(c);
        }}
      />
      <ExpanseList
        expenses={expenses.filter((exp) =>
          filter ? exp.category === filter : true
        )}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      />
    </div>
  );
};

export default ExpenseTracker;
