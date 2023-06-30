import React from "react";

type InputProps = {
  onAddCar: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onAddCar }: InputProps) => {
  return (
    <input
      onChange={onAddCar}
      className="border border-red-500 p-2 mr-2 w-[70%]"
      type="text"
    />
  );
};
export default Input;
