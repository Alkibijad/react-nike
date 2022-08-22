import React, { useContext, useEffect } from "react";
import Context from "../context/Provider";
import { useParams } from "react-router-dom";

function Men() {
  const { setViewProducts } = useContext(Context);

  let source = useParams();

  useEffect(() => {
    setViewProducts(source);
  }, [source]);

  return <div>Men</div>;
}

export default Men;
