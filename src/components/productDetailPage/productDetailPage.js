import React from "react";
import { useParams } from "react-router";
import data from "../../components/data/data";
import ProductModal from "../../components/productModal/productModal";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return <ProductModal product={product} />;
};

export default ProductDetailPage;
