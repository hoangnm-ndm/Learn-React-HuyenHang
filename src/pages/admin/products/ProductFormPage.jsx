import React from "react";
import { useParams } from "react-router";
import api from "../../../api";

const ProductFormPage = () => {
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const res = await api.post("/products", data);
  };

  return (
    <>
      <h1>{id ? "Update" : "Add"} Product</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" name="title" />
        </div>

        <div className="form-group">
          <label htmlFor="">Price</label>
          <input type="number" name="price" />
        </div>

        <div className="form-group">
          <label htmlFor="">Description</label>
          <textarea cols="30" rows="10" name="desc"></textarea>
        </div>

        <div className="form-group">
          <button>{id ? "Update" : "Add"}</button>
        </div>
      </form>
    </>
  );
};

export default ProductFormPage;
