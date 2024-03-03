import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import { Item } from "../Items/Item";
export const RelatedProducts = (props) => {
  const { product } = props;
  const filteredItems = data_product.filter(
    (item) => item.category === product.category
  );
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="RelatedProducts-items">
        {filteredItems.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
