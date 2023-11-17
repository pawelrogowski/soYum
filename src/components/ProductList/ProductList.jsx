import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import productPlaceholder from "../../assets/images/productPlaceholder.avif";
import { ingredientListItemMotion } from "../../common/animations";
import { Icon } from "../Icon/Icon";
import { StyledProductList } from "./ProductList.styled";
import PropTypes from "prop-types";
// Mockup

export const ProductList = ({ productArr }) => {
  const handleCheckboxChange = (id) => (event) => {
    console.log(id, event.target.checked);
  };

  return (
    <StyledProductList>
      <motion.li className="head-product-name">Ingredients</motion.li>
      <motion.li className="head-amount">Amount</motion.li>
      <motion.li className="head-add">Add to list</motion.li>
      <AnimatePresence>
        {productArr.map((product) => (
          <React.Fragment key={product.id}>
            <motion.li className="product__name" {...ingredientListItemMotion}>
              <picture>
                <source srcSet="" />
                <img
                  src={productPlaceholder}
                  alt="an ingredient image"
                  width="48px"
                  height="48px"
                  loading="lazy"
                />
              </picture>
              <span>{product.ingredient}</span>
            </motion.li>
            <motion.li className="product__amount" {...ingredientListItemMotion}>
              <span>{product.amount + " " + product.measureType}</span>
            </motion.li>
            <motion.li className="product__add" {...ingredientListItemMotion}>
              <label className="checkbox-container">
                <input
                  name="add-ingredient"
                  type="checkbox"
                  onChange={handleCheckboxChange(product.id)}
                />
                <div className="checkbox-custom">
                  <Icon icon="checkbox" />
                </div>
              </label>
            </motion.li>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </StyledProductList>
  );
};

ProductList.propTypes = {
  productArr: PropTypes.array.isRequired,
};
