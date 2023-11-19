import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProductList = styled(motion.ul)`
  --color-font-head: ${({ theme: t }) => t.productList.fontHead};
  --color-font-product: ${({ theme: t }) => t.productList.fontProduct};
  --color-font-amount: ${({ theme: t }) => t.productList.fontAmount};
  --color-icon-idle: ${({ theme: t }) => t.productList.iconRemoveIdle};
  --color-icon-active: ${({ theme: t }) => t.productList.iconRemoveActive};
  --color-checkbox: ${({ theme: t }) => t.productList.checkbxo};
  --color-bg-head: ${({ theme: t }) => t.productList.bgHead};
  --color-bg-row: ${({ theme: t }) => t.productList.bgRow};
  --color-bg-amount: ${({ theme: t }) => t.productList.bgAmount};
  --color-bg-picture: ${({ theme: t }) => t.productList.bgPicture};

  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.2fr;
  grid-row-gap: 2.4rem;
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    grid-row-gap: 4.4rem;
  }
  .head {
    &-product-name {
      border-radius: 0.8rem 0 0 0.8rem;
    }
    &-amount,
    &-add {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-add {
      border-radius: 0 0.8rem 0.8rem 0;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        min-width: 17.7rem;
      }
    }
    &-amount,
    &-add,
    &-product-name {
      color: var(--color-font-head);
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 0.8rem;
      background: var(--color-bg-head);
      padding: 1rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        font-size: 1.8rem;
        letter-spacing: 0.054rem;
        padding: 2rem;
        margin-bottom: 0.6rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        padding: 2.1rem 4rem;
      }
    }
  }
  .product {
    &__name {
      border-radius: 0.8rem 0 0 0.8rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-left: 1rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        padding-left: 3.2rem;
      }
      > span {
        max-width: 12rem;
        word-break: break-all;
        text-wrap: pretty;
        color: var(--color-font-product);
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.2;
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          font-size: 1.6rem;
          line-height: 1.5;
        }
      }
      > picture {
        width: 6rem;
        height: auto;
        aspect-ratio: 1 / 1;
        border-radius: 0.6rem;
        background: var(--color-bg-picture);
        padding: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          width: 8.1rem;
        }
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          width: 9.3rem;
        }
        > img {
          width: 4.8rem;
          aspect-ratio: 1 / 1;
          height: auto;
        }
      }
    }
    &__amount {
      > span {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 2.3rem;
        padding: 0.4rem 1.4rem;
        background: var(--color-bg-amount);
        border-radius: 0.4rem;
        color: var(--color-font-amount);
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem;
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          font-size: 1.8rem;
          padding: 0 2.8rem;
          max-height: 3.5rem;
          padding: 1.4rem 1.4rem;
        }
      }
    }
    &__add {
      border-radius: 0 0.8rem 0.8rem 0;
      min-width: 10rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        min-width: 17.7rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        max-width: 11.8rem;
      }
      > .checkbox-container {
        position: relative;
        display: block;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        > input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 100%;
          width: 100%;
          &:not(:checked) {
            + .checkbox-custom {
              svg {
                visibility: hidden;
              }
            }
          }
        }
        > .checkbox-custom {
          pointer-events: none;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 0.4rem;
          border: 1px solid #b4b8a9;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0.8rem;
            height: 0.8rem;
            stroke: var(--color-icon-active);
            fill: var(--color-icon-active);
          }
          &:focus,
          &:hover {
            svg {
              stroke: var(--color-icon-active);
            }
          }
          @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
            width: 3.5rem;
            height: 3.5rem;
            svg {
              width: 2rem;
              height: 2rem;
            }
          }
        }
      }
    }

    &__amount,
    &__add {
      display: flex;
      justify-content: center;
    }
    &__name,
    &__amount,
    &__add {
      align-items: center;
      padding-bottom: 1.6rem;
      padding-top: 1.6rem;
      background-color: var(--color-bg-row);
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        padding-bottom: 2.4rem;
        padding-top: 2.4rem;
      }
    }
  }
`;
