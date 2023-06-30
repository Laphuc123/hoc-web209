import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/Car";

const carsData = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Mercedes" },
  { id: 3, name: "Ford" },
];

function App() {
  const [cars, setCars] = useState<ICar[]>(carsData);

  const addCar = (car: ICar) => {
    setCars([...cars, car]);
  };
  const removeCar = (car: ICar) => {
    setCars(cars.filter((item) => item.id !== car.id));
  };
  return (
    <div className="w-[50%] mx-auto mt-10 flex justify-center items-stretch flex-col gap-5">
      <Form onAdd={addCar} />
      <List cars={cars} onRemove={removeCar}/>
    </div>
  );
}

export default App;
