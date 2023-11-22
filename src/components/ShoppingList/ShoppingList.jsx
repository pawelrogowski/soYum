import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import productPlaceholder from "../../assets/images/productPlaceholder.avif";
import { ingredientListItemMotion } from "../../common/animations";
import { Icon } from "..";
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
      <motion.li className="head-product-name">Products</motion.li>
      <motion.li className="head-amount">Amount</motion.li>
      <motion.li className="head-remove">Remove</motion.li>
      <AnimatePresence>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <motion.li className="product__name" {...ingredientListItemMotion}>
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
            </motion.li>
            <motion.li className="product__amount" {...ingredientListItemMotion}>
              <span>{product.amount + " " + product.measureType}</span>
            </motion.li>
            <motion.li className="product__remove" {...ingredientListItemMotion}>
              <button
                type="button"
                onClick={() => handleRemove(product.id)}
                aria-label={"remove " + product.name}
              >
                <Icon icon="x" />
              </button>
            </motion.li>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </StyledShoppingList>
  );
};

export default ShoppingList;
