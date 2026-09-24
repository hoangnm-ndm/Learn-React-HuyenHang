import React from "react";
import { useParams } from "react-router";
import api from "../../../api";
import { useForm } from "react-hook-form";
import { zodResolver } from "../../../../node_modules/@hookform/resolvers/zod/src/zod";
import { productSchema } from "../../../validation/productSchema";

const ProductFormPage = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const submit = async (data) => {
    if (id) {
      // * Update
    } else {
      // * create
    }
  };

  return (
    <>
      <h1>{id ? "Update" : "Add"} Product</h1>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" {...register("title")} />
          {errors?.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
          />
          {errors?.price && (
            <p style={{ color: "red" }}>{errors.price.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="">Description</label>
          <textarea cols="30" rows="10" {...register("desc")}></textarea>
        </div>

        <div className="form-group">
          <button>{id ? "Update" : "Add"}</button>
        </div>
      </form>
    </>
  );
};

export default ProductFormPage;
