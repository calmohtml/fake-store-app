import React, { useState } from "react";

export const CreateProduct = () => {
  //event handler
  const [formData, setFormData] = useState({});

  const eventHandler = async (event) => {
    event.preventDefault();
    createProductData();
    if (formData !== null) {
      try {
        const productResponse = await fetch(
          "https://fakestoreapi.com/products",
          {
            method: "POST",
            body: JSON.stringify(formData),
          }
        ).then((res) => res.json());
        console.log(productResponse);
        {
          <h2>Product created: {productResponse.id}</h2>;
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Hubo un error");
    }
  };

  const createProductData = () => {
    const form = document.querySelector("#form");
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const category = form.category.value;
    if (
      title !== "" &&
      price !== "" &&
      description !== "" &&
      image !== "" &&
      category !== ""
    ) {
      setFormData({ title, price, description, image, category });
      form.reset();
    } else {
      return console.log("No se puede poner inputs vacíos");
    }
  };

  return (
    <div>
      {/* This is a post form */}
      <form action="post" onSubmit={eventHandler} id="form">
        <input type="text" name="title" id="" placeholder="title" />
        <input type="text" name="price" id="" placeholder="price" />
        <input type="text" name="description" id="" placeholder="description" />
        <input type="text" name="image" id="" placeholder="image" />
        <select name="category" id="">
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
