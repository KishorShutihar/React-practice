import { Form } from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "./components/Table";
import { useState } from "react";
import { CATEGORIES, ExpenseData } from "./components/interfaces/expense";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState<ExpenseData[]>([
    {
      description: "milk",
      amount: 2.5,
      category: "Groceries",
    },
    {
      description: "bread",
      amount: 10.5,
      category: "Groceries",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const onFormSubmit = (data: ExpenseData) => {
    const newExpenses = [...expenses, data];
    setExpenses(newExpenses);
  };

  const visibleExpenses =
    selectedCategory === "All Categories"
      ? expenses
      : selectedCategory
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  const onDelete = (expenseDesc: string) => {
    const newExpenses = expenses.filter(
      (expense) => expense.description !== expenseDesc
    );
    setExpenses(newExpenses);
  };

  return (
    <>
      <Form onSubmit={onFormSubmit} />
      <br />
      <Table
        data={visibleExpenses}
        onFilterChange={(category) => setSelectedCategory(category)}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;
