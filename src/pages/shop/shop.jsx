import React from "react";
// import { ELECTRONICS } from "../../products";
import { ELECTRONICS } from "../../products";
// import { CLOTHES } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <>
    <div className="shop">
    <h1 className="innovacart">InnovaCart</h1>
      <div className="shopTitle">
        <h1 className="electronics">ELECTRONICS</h1>
      </div>
      <div className="products">
        {ELECTRONICS.map((product) => (
          <Product data={product} />
        ))}
        {/* {CLOTHES.map((product) => (
          <Product data={product} />
        ))} */}
      </div>
    </div>
    </>
  );
};
