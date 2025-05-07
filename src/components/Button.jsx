import React from "react";

const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-[#fece51] hover:bg-[#fdd868] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
