import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  display: flex;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid #e0e0e0;
  height: 4.4rem;
  transition: border-color 200ms;
  width: 100%;
  cursor: pointer;

  span {
    display: none;
  }

  div {
    max-height: 2.4rem;
    min-height: 0;
  }

  .Select {
    //main wrapper
    &__control {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #22252a;
      font-size: 1.6rem;
      line-height: normal;
      letter-spacing: -0.032rem;
      height: 2.4rem;
    }

    &__placeholder {
      color: #0000004d;
      font-size: 1.6rem;
    } // dropdown icon wrapper
    &__indicator {
      //idle icons
      svg {
        fill: #22252a;
        transition: fill 200ms;
        &:focus,
        &:hover {
          fill: #8baa36;

          svg {
            fill: #8baa36;
          }
        }
      }
      max-height: 1.4rem;
    }
    //dropdown clear icon
    &__clear-indicator {
      &:focus,
      &:hover {
        svg {
          fill: red;
        }
      }
    }
    &__multi-value {
      border: 1px solid #8baa36;
      border-radius: 4px;
      padding: 0 4px;
      background: #fff;
      gap: 5px;
      align-items: center;
      &:focus,
      &:hover {
        svg {
          fill: red;
          cursor: pointer;
        }
      }
    }
    &__value-container {
      gap: 12px;
    }

    &__menu {
      background: #fff;
      border-radius: 0.6rem;
      box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
      min-height: 12.4rem;
      margin-top: -0.61rem;
      scrollbar-width: thin;
      scrollbar-color: #8baa36 #fff;
      width: 100%;

      ::-webkit-scrollbar {
        width: 14px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #e7e5e5;
        border-radius: 12px;
        border: 6px solid #fff;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #8baa36;
      }
    }

    &__menu-list {
      border: 1px solid #8baa36;
      width: 100%;
      min-height: 12.4rem;
      border-radius: 0.6rem;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.8rem 1.8rem;
    }

    &__option {
      min-height: 2rem;

      &:hover,
      &:focus {
        color: #8baa36;
        cursor: pointer;
      }
    }
  }

  /* ;


  &:focus-within,
  &:hover {
    border-bottom: 1px solid #8baa36;
  }

  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2.4rem;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }



  .category-selected {
    color: #000000;
    font-size: 1.6rem;
    line-height: normal;
    letter-spacing: -0.032rem;
    height: 2.4rem;
  }

  .Select {
    //main wrapper
    &__control {
      border: none;
      background: none;
      cursor: pointer;
      border: 1px solid red;
      height: 2.4rem;
      overflow: hidden;
      min-height: 0;
    }
    // dropdown icon wrapper
    &__indicator {
      //idle icons
      svg {
        fill: #22252a;
        width: 2.4rem;
        height: 2.4rem;
        transition: fill 200ms;
        &:focus,
        &:hover {
          fill: #8baa36;

          svg {
            fill: #8baa36;
            width: 2.4rem;
            height: 2.4rem;
          }
        }
      }
      max-height: 1.4rem;
    }
    //dropdown clear icon
    &__clear-indicator {
      &:focus,
      &:hover {
        svg {
          fill: red;
        }
      }
      max-height: 1.4rem;
    }
    &__placeholder {
      color: #22252a;
      font-family: Poppins;
      font-size: 1.6rem;
      line-height: 1;
    }
    &__single-value,
    &__input-container {
      color: #22252a;
      font-family: Poppins;
      font-size: 1.6rem;
      line-height: 1;
      overflow: visible;
    }
    &__multi-value {
      display: flex;
      align-items: center;
      color: #22252a;
      font-family: Poppins;
      font-size: 1.6rem;
      line-height: 1;
      svg {
        width: 1.6rem;
        height: 1.6rem;
        &:hover,
        &:focus {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
      &__remove {
        svg {
          width: 1.6rem !important;
          height: 1.6rem !important;
          &:hover,
          &:focus {
            width: 1.6rem;
            height: 1.6rem;
          }
        }
      }
    }
    &__value-container {
      overflow: visible;
      max-height: 24px;
      padding: 0;
      display: flex;
      justify-content: space-between;
    }

    &__menu {
      background: #fff;
      border-radius: 0.6rem;
      box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
      height: 11.2rem;

      margin-top: 0.61rem;
      scrollbar-width: thin;
      scrollbar-color: #8baa36 #fff;
      right: 0;
      width: 100%;
      ::-webkit-scrollbar {
        width: 14px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #e7e5e5;
        border-radius: 12px;
        border: 6px solid #fff;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #8baa36;
      }
    }

    &__menu-list {
      border-radius: 0.6rem;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      display: flex;
      flex-direction: column;
      height: 11.2rem;
      padding: 0.8rem 1.8rem;
    }

    &__option {
      border: none;
      padding: 0.2rem 0;

      &:hover,
      &:focus {
        color: #8baa36;
        cursor: pointer;
      }
    }

    &__input-container {
      display: block;
    }
    &__indicators {
      justify-self: flex-end;
    }
  } */
`;
