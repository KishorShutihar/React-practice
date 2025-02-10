import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export const Alert = ({ onClose, children }: Props) => {
  return (
    <div
      className={`alert alert-primary alert-dismissible fade show`}
      role="alert"
    >
      <p>{children}</p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
