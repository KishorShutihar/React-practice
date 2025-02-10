import styles from "./Button.module.css";

type ButtonProps = {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
};

export const Button = () => {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles["btn-primary"]].join(" ")}
      >
        Button
      </button>
    </>
  );
};
