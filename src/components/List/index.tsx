import { ICar } from "@/interfaces/Car";
import { Item } from "..";

type ListProps = {
  cars: ICar[];
  onRemove: (car: ICar) => void;
}

const List = ({cars, onRemove}: ListProps) => {
  return (
    <div className="flex justify-center items-stretch flex-col gap-5">
     {cars.map((car) =>(
      <Item key={car.id} car={car} onRemove={onRemove}/>
     ))}
    </div>
  );
}
export default List;