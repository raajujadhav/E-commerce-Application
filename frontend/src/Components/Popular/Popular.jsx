import React from "react";
import "./Popular.css";
// import all_product from "../Assets/all_product";
import all_product_women from "../Assets/all_product_women";
import { Item } from "../Items/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {all_product_women.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};
