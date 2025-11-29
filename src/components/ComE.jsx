import axios from "axios";
import React, { useEffect, useState } from "react";

const ComE = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItems(response.data);
      console.log("Fetched Data:", response.data);
    } catch (error) {
      console.log("Error Fetching Data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
        <h1>Products List</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
    </>
  );
};

export default ComE;
