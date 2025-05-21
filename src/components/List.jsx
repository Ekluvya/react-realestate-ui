import Card from "./Card";

const List = ({ data }) => {
  return data.length == 0 ? (
    <p>No Posts!</p>
  ) : (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      {console.log("Length of the array is:", data.length)}
    </div>
  );
};

export default List;
