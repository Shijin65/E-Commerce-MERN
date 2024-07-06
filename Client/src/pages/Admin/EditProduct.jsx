import React from "react";
import AddProduct from "./AddProduct";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
    console.log(productId)
  return (
    <div>
      <AddProduct productId={productId}/> 
    </div>
  );
};

export default EditProduct;
