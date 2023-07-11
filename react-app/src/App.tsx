import { useState } from "react";
import ExpanseList from "./components/expnase-tracker/components/expanseList";
import ExpenseFilter from "./components/expnase-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expnase-tracker/components/ExpenseForm";
import categories from "./components/expnase-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "11",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "22",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "33",
      amount: 10,
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
}

export default App;
/**
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

 */
