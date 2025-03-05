import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch(`/api/items?page=${page}&limit=5`);
    const data = await res.json();
    setItems([...items, ...data.data]);
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchItems}
      hasMore={true}
    >
      {items.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </InfiniteScroll>
  );
};

export default ItemsList;
