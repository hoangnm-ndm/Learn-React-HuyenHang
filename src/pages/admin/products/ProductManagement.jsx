import React, { useEffect, useState } from "react";
import api from "../../../api";
import { Link } from "react-router";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  //* zustand

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get("/products");
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })();

    // ()() - IIFE
  }, []);

  return (
    <>
      <div>
        <h1>Management Products</h1>
        <Link to="add">Create new</Link>
        {/* http:localhost:5173/admin/products/add */}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length != 0 &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.thumbnail} alt={item.title} width="100px" />
                </td>
                <td>
                  <Link to={`update/${item.id}`}>Update</Link>{" "}
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductManagement;
