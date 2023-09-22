import styled from "styled-components";
import { flexContainer, font } from "../../utils/mixins";

export const StyledNav = styled.nav`
  --font-family: ${({ theme }) => theme.navigation.font};
  --color-idle: ${({ theme }) => theme.navigation.colorIdle};
  --color-hover: ${({ theme }) => theme.navigation.colorHover};
  margin-right: auto;

  > ul {
    ${flexContainer({
      direction: "row",
      justify: "flex-start",
      align: "center",
      wrap: "nowrap",
      gap: "3rem",
    })}

    > li > a,
    > span {
      ${font({
        family: "var(--font-family)",
        color: "var(--color-idle)",
        size: "1.4rem",
        weight: "500",
        height: "1.8rem",
        spacing: "-0.028rem",
      })}
      transition: color 100ms;

      &:hover,
      &:focus {
        color: var(--color-hover);
        transition: color 100ms;
      }
    }

    > li > button > svg {
      stroke: var(--color-idle);
      width: 2.4rem;
      height: 2.4rem;
      transition: stroke 100ms;
    }

    > li {
      &:focus,
      &:hover {
        svg {
          stroke: var(--color-hover);
          transition: color 100ms;
        }
      }
    }

    > li > button {
      width: 2.4rem;
      height: 2.4rem;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .Block {
      &__Element {
        &--Modifier {
          //Block__Element--Modifier
        }
      }
    }
  }
`;
