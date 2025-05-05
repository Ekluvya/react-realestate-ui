import Card from "./Card";
import { listData } from "../lib/dummydata";

const List = () => {
  const data = listData.slice(0, 4);
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
