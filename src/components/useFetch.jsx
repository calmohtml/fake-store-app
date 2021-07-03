import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  /* const [actualValue, changeTheValueFunction] = useState(initialValue) */
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //This code will run when the component renders
    const getData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setIsLoading(false);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [endpoint]);
  //Sending this data to every component that imports 'useFetch'
  return { products, isLoading };
};

export default useFetch;
