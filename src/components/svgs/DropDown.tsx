import React from "react";

const DropDown = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#737373"
        d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"
      />
    </svg>
  );
};

export default DropDown;
