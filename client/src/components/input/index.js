import React from "react";


const Input = ({ name, onChange, value, type }) => {
  return (
    <input
    type={type}
      name={name}
      onChange={onChange}
      value={value || ""}
      placeholder={name}
    ></input>
  );
};

export default Input;
