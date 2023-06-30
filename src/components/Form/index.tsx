import { AiOutlinePlus } from "react-icons/ai";
import { Button, Input } from "..";
import React, { useState } from "react";
import { ICar } from "@/interfaces/Car";

type FormProps = {
  onAdd: (car: ICar) => void;
};

const Form = ({onAdd}: FormProps) => {
  const [valueInput, setValueInput] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valueInput !== "") {
      onAdd({
        id: Math.floor(Math.random() * 1000),
        name: valueInput,
      });
      e.target.reset();
      setValueInput("");
    }
  };
  const onAddCar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  return (
    <form onSubmit={onSubmit} className="flex justify-between items-center">
      <Input onAddCar={onAddCar} />
      <Button add icon={<AiOutlinePlus />} />
    </form>
  );
};
export default Form;
