import { ICar } from "@/interfaces/Car";
import { Button } from "..";
import { AiOutlineRest } from "react-icons/ai";


type ItemProps = {
  car: ICar;
  onRemove: (car: ICar) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <p>{car.name}</p>
      <Button remove onClick={() => onRemove(car)} icon={<AiOutlineRest />}/>
    </div>
  );
};
export default Item;
