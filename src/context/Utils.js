import React, { useContext } from 'react'
import Context from "../context/Provider";

     

function Utils() {
    const { products } = useContext = { Context }
    console.log("products" , products)
  return (
    <div>Utils</div>
  )
}

export default Utils