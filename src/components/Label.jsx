import React from "react";

const Label = ({ htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    />
  );
};

export default Label;
