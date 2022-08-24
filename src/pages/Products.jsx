import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/Provider";

function Products() {

  const {getProductsByCategory, productsByCategory } = useContext(Context);
  let { category } = useParams();


  useEffect(() => { 
   getProductsByCategory(category)
  }, [category])
  
  useEffect(() => {
    console.log(productsByCategory);
   }, [productsByCategory])

  return <div></div>;
}

export default Products;
