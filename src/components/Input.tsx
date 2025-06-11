"use client";

import { useState } from "react";

function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <input
      type="text"
      className="..."
      placeholder="..."
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default Input;
