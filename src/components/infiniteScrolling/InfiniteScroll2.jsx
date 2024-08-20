import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteScroll2 = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?page=${page}`
      );
      const data = await response.json();

      setItems((prevItems) => [...prevItems, ...data]);
      data.length > 0 ? setHasMore(true) : setHasMore(false);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
