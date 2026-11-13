import Item from "./Item";

const ListItems = ({ watchlist, priorityStyles }) => {
  return (
    <ul className="space-y-3">
      {watchlist.map((m) => (
        <Item key={m.id} m={m} priorityStyles={priorityStyles} />
      ))}
    </ul>
  );
};

export default ListItems;
