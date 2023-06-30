import React from "react";

type ButtonProps = {
  add?: boolean;
  remove?: boolean;
  icon: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ add, remove, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded hover:opacity-70 flex justify-center items-center cursor-pointer
    ${add && "bg-blue-500 text-white "}
    ${remove && "bg-red-500 text-white "}
    `}
    >
      {icon}
    </button>
  );
};
export default Button;
