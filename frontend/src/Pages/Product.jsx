import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BreadCrum } from "../Components/Breadcrums/BreadCrum";
import { ShopContext } from "../Context/ShopContext";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DecscriptionBox } from "../Components/DescriptionBox/DecscriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DecscriptionBox />
      <RelatedProducts product={product} />
    </div>
  );
};
