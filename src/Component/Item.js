import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";


function Item() {
  const productData = useSelector((state) => state.counter.products);
  // console.log(productData, "asdfg");

  return (
    <div className="container item_item">
      <h1 className="text-center text-success">Our Menu</h1>
      <div className="row my-3">
        {productData.map((item) => 
          <Product data={item}/>
        )}
      </div>
    </div>
  );
}

export default Item;
