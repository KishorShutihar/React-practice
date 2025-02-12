import React, { useRef } from "react";
import { CATEGORIES, Category, ExpenseData } from "./interfaces/expense";

type FormProps = {
  onSubmit: (data: ExpenseData) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const formData: ExpenseData = {
    description: "",
    amount: 0,
    category: CATEGORIES[0],
  };

  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !descriptionRef.current?.value ||
      !amountRef.current?.value ||
      !categoryRef.current?.value
    ) {
      console.error("One or more refs are null");
      return;
    }

    formData.description = descriptionRef.current.value;
    formData.amount = Number(amountRef.current.value);
    formData.category = categoryRef.current.value as Category;
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-check">
          <label htmlFor="description">Description</label>
          <input
            ref={descriptionRef}
            type="text"
            id="description"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <label htmlFor="amount">Amount</label>
          <input
            ref={amountRef}
            type="number"
            className="form-control"
            id="amount"
          />
        </div>
        <div className="form-check">
          <label htmlFor="category">Category</label>
          <select ref={categoryRef} className="form-control" id="category">
            {CATEGORIES.map((category, index) =>
              category !== "All Categories" ? (
                <option key={index}>{category}</option>
              ) : null
            )}
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
