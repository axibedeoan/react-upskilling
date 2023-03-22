import React from "react";

type DropdownProps = {
  placeholder: string;
  options: any[];
};

export const Dropdown = ({ placeholder, options }: DropdownProps) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-input"></div>
      <div className="dropdown-menu">
        {options.map((option) => (
          <div className="dropdown-item">{option}</div>
        ))}
      </div>
    </div>
  );
};
