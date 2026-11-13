import Item from "./Item";

const ListItems = ({ watchlist, handleAddToWatchList }) => {
  if (watchlist.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-slate-400">
        No items under this tab
      </p>
    );
  }
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
