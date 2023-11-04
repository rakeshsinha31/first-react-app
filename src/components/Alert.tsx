// style={{visibility : 'hidden' }}

import { ReactNode } from "react";

interface alertProps {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: alertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
