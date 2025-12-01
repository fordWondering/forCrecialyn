import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onHandleToggle,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((cback) => (
          <Item
            item={cback}
            onDeleteItem={onDeleteItem}
            onHandleToggle={onHandleToggle}
            key={cback.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Input mo siya by order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Eto by status</option>
        </select>
        <button onClick={onClearList}>Clear all</button>
      </div>
    </div>
  );
}
