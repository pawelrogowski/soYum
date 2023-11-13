import React, { useState } from "react";

import productPlaceholder from "../../assets/images/productPlaceholder.avif";
import { Icon } from "../Icon/Icon";
import { StyledShoppingList } from "./ShoppingList.styled";

// Mockup
const initialProducts = [
  {
    id: "1",
    name: "Product 1",
    amount: 2,
    measureType: "tsp",
    image: "",
  },
  { id: "2", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "3", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "4", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "5", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "6", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "7", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "8", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "9", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "10", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "11", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "12", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "13", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "14", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "15", name: "Product 3", amount: 1, measureType: "kg", image: "" },
  { id: "16", name: "Product 2", amount: 3, measureType: "g", image: "" },
  { id: "17", name: "Product 3", amount: 1, measureType: "kg", image: "" },
];

export const ShoppingList = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <StyledShoppingList>
      <li className="head-product-name">Products</li>
      <li className="head-amount">Amount</li>
      <li className="head-remove">Remove</li>

      {products.map((product) => (
        <React.Fragment key={product.id}>
          <li className="product__name">
            <picture>
              <source srcSet={product.image} />
              <img
                src={productPlaceholder}
                alt="an ingredient image"
                width="48px"
                height="48px"
                loading="lazy"
              />
            </picture>
            <span>{product.name}</span>
          </li>
          <li className="product__amount">
            <span>{product.amount + " " + product.measureType}</span>
          </li>
          <li className="product__remove">
            <button type="button" onClick={() => handleRemove(product.id)}>
              <Icon icon="x" />
            </button>
          </li>
        </React.Fragment>
      ))}
    </StyledShoppingList>
  );
};
