import React, { useEffect, useState, Fragment } from "react";
// import useFetch from "../useFetch";
import { useParams } from "react-router";
import { Button } from "../button/Button";

export const Product = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      {isLoading && <h1>Loading...</h1>}
      {
        <section className="singleProduct__container">
          <div className="singleProduct__title">
            <h2>{product.title}</h2>
            <h2>${product.price}</h2>
          </div>
          <div className="singleProduct__info">
            <figure className="singleProduct__img">
              <img src={product.image} alt={"Image of the " + product.title} />
            </figure>
            <div className="singleProduct__description">
              <h2>Description:</h2>
              <h3>{product.description}</h3>
              <Button text="Buy" />
            </div>
          </div>
        </section>
      }
    </Fragment>
  );
};
