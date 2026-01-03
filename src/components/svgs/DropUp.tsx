import React from "react";

const DropUp = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#737373"
        d="m12 11.828l-2.828 2.829l-1.415-1.414L12 9l4.243 4.243l-1.415 1.414L12 11.828Z"
      />
    </svg>
  );
};

export default DropUp;
