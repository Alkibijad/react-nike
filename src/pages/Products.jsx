import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/Provider";
// import Context from "../context/Provider";
// import { useParams } from "react-router-dom";

function Products() {
  const {getProductsByCategory, selectedProducts } = useContext(Context);
  let { category } = useParams();

  useEffect(() => { 
   getProductsByCategory(category)
  }, [category])
  
  useEffect(() => {
    console.log(selectedProducts);
   }, [selectedProducts])

  return <div></div>;
}

export default Products;
