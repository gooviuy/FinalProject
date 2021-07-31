import React from "react";

const Input = ({ name, onChange, value }) => {
  return (
    <input
      name={name}
      onChange={onChange}
      value={value || ""}
      placeholder={name}
    ></input>
  );
};

export default Input;
