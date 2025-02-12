import React, { useState } from "react";
import { CATEGORIES, ExpenseData } from "./interfaces/expense";

type FormProps = {
  onSubmit: (data: ExpenseData) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<ExpenseData>({
    description: "",
    amount: 0,
    category: CATEGORIES[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-check">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            onChange={handleChange}
          >
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
