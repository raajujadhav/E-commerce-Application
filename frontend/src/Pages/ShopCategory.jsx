import React, { useContext } from "react";
import "./Css/ShopCategary.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Items/Item";
export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <img className="Shopcategory-banner" src={props.banner} alt="" />
      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="Shopcategory-Sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="ShopCategory-products">
        {all_product.map((item, i) => {
          if (props.categary == item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="Shopcategory-loadmore">Explore More</div>
    </div>
  );
};
