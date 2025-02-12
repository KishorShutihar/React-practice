import { useState } from "react";
import { CATEGORIES, Category, ExpenseData } from "./interfaces/expense";

interface TableProps {
  data: ExpenseData[];
  children?: React.ReactNode;
  onFilterChange: (filterValue: Category) => void;
  onDelete: (expenseName: string) => void;
}

export const Table = ({ data, onFilterChange, onDelete }: TableProps) => {
  const [filter, setFilter] = useState<Category>(CATEGORIES[0]);
  // console.log("hello this is data", data);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value as Category;
    setFilter(selectedCategory);
    onFilterChange(selectedCategory);
  };

  return (
    <>
      <div className="mb-3">
        <select
          name="filter"
          className="form-select"
          id="filter"
          onChange={onChange}
        >
          {CATEGORIES.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>
      {data.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum, index) => (
              <tr key={index}>
                <td>{datum.description}</td>
                <td>${Number(datum.amount).toFixed(2)}</td>
                <td>{datum.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(datum.description)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>
                $
                {data
                  .reduce((acc, expense) => acc + Number(expense.amount), 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
