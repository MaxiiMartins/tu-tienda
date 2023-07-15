import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await (await fetch("https://fakestoreapi.com/products")).json();
      data.forEach((item) =>(item.price = item.price*517))
      
      setProducts(data)
    };
    fetchProducts()
  }, []);

  return (
    <ProductContext.Provider value={{products}} >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
