import { useState, useEffect } from "react";

const Datafetching = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const loadData = async (page) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${itemsPerPage}`
      );
      const photos = await response.json();

      setData(photos);
    } catch (err) {
      console.log("error :", err);
    }
  };

  useEffect(() => {
    loadData(currentPage);
  }, [currentPage]);

  //   Function to handle pagination change
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "50px",
          width: "100%",
        }}
      >
        {data &&
          data.map((element) => (
            <div key={element.id}>
              <img
                src={element.thumbnailUrl}
                alt={element.title}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          style={{ padding: "10px 20px", marginRight: "10px" }}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange("next")}
          style={{ padding: "10px 20px", marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Datafetching;
