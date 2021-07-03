import React from "react";
import useFetch from "../useFetch";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

export const Category = ({ categoryName }) => {
  const basePath = "https://fakestoreapi.com/products/";
  const url = `${basePath + categoryName}`;
  const { products, isLoading } = useFetch(url);

  return (
    <section className="products__container">
      <ul className="products">
        {isLoading && <h2>Loading...</h2>}
        {products.map((item) => (
          <li key={item.id} className="product">
            <div className="product__title">
              <h2>{item.title}</h2>
              <h2>${item.price}</h2>
              <figure className="product__img">
                <img src={item.image} alt={"Image of the " + item.title} />
              </figure>
            </div>
            <Link to={`/product/${item.id}`}>
              <Button text="Click here" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
