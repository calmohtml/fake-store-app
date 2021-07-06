import React, { useState, Fragment } from "react";
import { Button } from "../button/Button";

export const CreateProduct = () => {
  //event handler
  const [formData, setFormData] = useState({});

  const eventHandler = async (event) => {
    event.preventDefault();
    createProductData();
    if (formData !== null || {}) {
      console.log(formData);
      try {
        const productResponse = await fetch(
          "https://fakestoreapi.com/products",
          {
            method: "POST",
            body: JSON.stringify(formData),
          }
        )
          .then((res) => res.json())
          .then((json) => console.log(json));
        //alert(`Product added to the DB: ID: ${productResponse.id}`);
        console.log(productResponse);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Hubo un error");
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
    //This is a POST form
    <section className="form__container">
      <form action="post" onSubmit={eventHandler} id="form">
        <div className="form__item">
          <h2>Title</h2>
          <input type="text" name="title" id="" placeholder="title" />
        </div>
        <div className="form__item">
          <h2>Price</h2>
          <input type="number" name="price" id="" placeholder="price" />
        </div>
        <div className="form__item">
          <h2>Description</h2>
          <input
            type="text"
            name="description"
            id=""
            placeholder="description"
          />
        </div>
        <div className="form__item">
          <h2>Image (URL)</h2>
          <input type="url" name="image" id="" placeholder="image" />
        </div>
        <div className="form__item">
          <h2>Category</h2>
          <select name="category" id="">
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
          </select>
        </div>
        <Button text="Send" />
      </form>
    </section>
  );
};
