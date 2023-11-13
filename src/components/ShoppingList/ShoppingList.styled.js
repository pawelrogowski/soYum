import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledShoppingList = styled(motion.ul)`
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
    &-remove {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-remove {
      border-radius: 0 0.8rem 0.8rem 0;
    }
    &-amount,
    &-remove,
    &-product-name {
      color: #fafafa;
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 0.8rem;
      background: #8baa36;
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
      display: flex;
      gap: 1rem;
      margin-left: 1rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        margin-left: 4rem;
      }
      > span {
        max-width: 12rem;
        word-break: break-all;
        text-wrap: pretty;
        color: #3e4462;
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
        background: #ebf3d4;
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
        padding: 0 1.4rem;
        background: #8baa36;
        border-radius: 0.4rem;
        color: #fafafa;
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem;
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          font-size: 1.8rem;
          padding: 0 2.8rem;
          max-height: 3.5rem;
        }
      }
    }
    &__remove {
      max-width: 7rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        max-width: 15.8rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        margin-right: 4rem;
        max-width: 11.8rem;
      }
      > button {
        background: none;
        border: none;
        width: 1.4rem;
        height: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        > svg {
          width: 1.4rem;
          height: 1.4rem;
          stroke: #000;
        }
        &:focus,
        &:hover {
          > svg {
            stroke: red;
          }
        }
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          width: 2rem;
          height: 2rem;
          > svg {
            width: 2rem;
            height: 2rem;
          }
        }
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
          margin-left: 4rem;
          width: 2.4rem;
          width: 2.4rem;
          > svg {
            width: 2.4rem;
            width: 2.4rem;
          }
        }
      }
    }
    &__amount,
    &__remove {
      display: flex;
      justify-content: center;
    }
    &__name,
    &__amount,
    &__remove {
      padding-bottom: 2.4rem;
      border-bottom: 1px solid #e0e0e0;
      color: #fafafa;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        padding-bottom: 4.2rem;
      }
    }
  }
`;
