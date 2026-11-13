import Item from "./Item";

const ListItems = ({ watchlist, handleAddToWatchList }) => {
  return (
    <ul className="space-y-3">
      {watchlist.map((movieItem) => (
        <Item
          key={movieItem.id}
          movie={movieItem}
          handleAddToWatchList={handleAddToWatchList}
        />
      ))}
    </ul>
  );
};

export default ListItems;
