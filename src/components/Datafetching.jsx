import { useState, useEffect } from "react";

const Datafetching = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const photos = await response.json();
      // console.log(photos);
      setData(photos);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "50px",
        width: "100%",
      }}
    >
      {data.map((element) => (
        <div key={element.id}>
          <img
            src={element.thumbnailUrl}
            alt={element.title}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Datafetching;
