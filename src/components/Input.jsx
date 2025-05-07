import React from "react";

const Input = ({
  id,
  name,
  type,
  autoComplete,
  required,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      className="appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700"
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
