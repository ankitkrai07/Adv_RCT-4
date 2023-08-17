import React, { useState } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postProduct } from "../Redux/Products/action";

const initialState = {
  name: "",
  brand: "",
  price: "",
  gender: "",
  category: "",
  color: "",
  image: "",
};
export const Admin = () => {
  const [productData, setProductData] = useState(initialState);

  const { error, isError } = useSelector((store) => {
    return {
      error: store.productReducer.error,
      isError: store.productReducer.isError,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    dispatch(postProduct(productData));
    setProductData(initialState);
  };

  return (
    <DIV iserror={isError.toString()}>
      {error && <h3>{error}</h3>}
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Add Product</h1>
          <input
            type="text"
            placeholder="Name"
            value={productData.name}
            onChange={handleChange}
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Image"
            value={productData.image}
            onChange={handleChange}
            name="image"
            required
          />
          <input
            type="text"
            placeholder="Brand"
            value={productData.brand}
            onChange={handleChange}
            name="brand"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            name="price"
            required
          />
          <select
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </select>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="topwear">Top Wear</option>
            <option value="bottomwear">Bottom Wear</option>
            <option value="footwear">Foot Wear</option>
          </select>
          <select
            name="color"
            value={productData.color}
            onChange={handleChange}
            required
          >
            <option value="">Select Color</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* .data-input {
  } */
  width: 400px;
  margin: 20px auto;
  border: ${({ iserror }) =>
    iserror === "true" ? "1px solid red" : "1px solid green"};
  padding: 20px 30px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  input,
  select {
    height: 40px;
    width: 100%;
    font-size: larger;
  }
  button {
    width: 50%;
    height: 35px;
    border: none;
    cursor: pointer;
  }
`;
