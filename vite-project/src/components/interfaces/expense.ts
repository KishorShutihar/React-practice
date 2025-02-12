export interface ExpenseData {
  description: string;
  amount: number;
  category: Category;
}

export type Category =
  | "All Categories"
  | "Groceries"
  | "Utilities"
  | "Entertainment";

export const CATEGORIES = [
  "All Categories",
  "Groceries",
  "Utilities",
  "Entertainment",
] as const;
