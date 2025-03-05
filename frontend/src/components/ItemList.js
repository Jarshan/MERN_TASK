import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchItems = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/items?page=${page}&limit=5`);
            if (res.data.data.length === 0) {
                setHasMore(false);
            } else {
                setItems((prevItems) => [...prevItems, ...res.data.data]);
                setPage(page + 1);
            }
        } catch (err) {
            console.error('Error fetching items:', err);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Memoizing the rendered items
    const memoizedItems = useMemo(() => {
        return items.map((item) => (
            <div key={item._id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        ));
    }, [items]);  

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchItems}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            <div>
                {memoizedItems}  
            </div>
        </InfiniteScroll>
    );
};

export default ItemList;
