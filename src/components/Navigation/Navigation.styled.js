import styled, { css } from "styled-components";
import { flexContainer, font } from "../../styles/mixins";

export const StyledNav = styled.nav`
  ${({ theme, $variant }) =>
    $variant === "footer"
      ? css`
          ul {
            ${flexContainer({
              direction: "column",
              justify: "flex-start",
              align: "flex-start",
              wrap: "nowrap",
              gap: "1.4rem",
            })}
            @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              gap: 2rem;
            }
            @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
              gap: 2.4rem;
            }
          }
          a,
          wwww span {
            ${font({
              family: ({ theme }) => theme.navigation.font,
              color: ({ theme }) => theme.navigation.footer.colorIdle,
              size: "1.4rem",
              weight: "500",
              height: "1.8rem",
              spacing: "-0.028rem",
            })}
            transition: color 100ms;
            &:hover,
            &:focus {
              color: ${theme.navigation.footer.colorHover};
              transition: color 100ms;
            }
          }
        `
      : $variant === "header"
      ? css`
          ul {
            ${flexContainer({
              direction: "row",
              justify: "flex-start",
              align: "center",
              wrap: "nowrap",
              gap: "3rem",
            })}
            a,
					span {
              display: flex;
              align-items: center;
              ${font({
                family: ({ theme }) => theme.navigation.font,
                color: ({ theme }) => theme.navigation.header.colorIdle,
                size: "1.4rem",
                weight: "500",
                height: "2.24rem",
              })}
              transition: color 100ms;
              &:hover,
              &:focus {
                color: ${theme.navigation.header.colorHover};
                transition: color 100ms;
                svg {
                  stroke: ${theme.navigation.header.colorHover};
                  transition: stroke 100ms;
                }
              }
            }
            svg {
              fill: none;
              stroke: ${({ theme }) => theme.navigation.header.colorIdle};
              width: 2.4rem;
              height: 2.4rem;
              padding: 0.2rem;
              transition: stroke 100ms;
              &:hover,
              &:focus {
                stroke: ${theme.navigation.header.colorHover};
                transition: stroke 100ms;
              }
            }
          }
        `
      : $variant === "hamburger"
      ? css`
          ul {
            ${flexContainer({
              direction: "column",
              justify: "flex-start",
              align: "center",
              wrap: "nowrap",
              gap: "4rem",
            })}

            li,a {
              display: flex;
              align-items: center;
              ${font({
                family: ({ theme }) => theme.navigation.font,
                color: ({ theme }) => theme.navigation.hamburger.colorIdle,
                size: "1.4rem",
                weight: "500",
                height: "2.4rem",
                spacing: "-0.048rem",
              })}
              transition: color 100ms;
              &:hover,
              &:focus {
                color: ${theme.navigation.hamburger.colorHover};
                transition: color 100ms;
                svg {
                  stroke: ${theme.navigation.hamburger.colorHover};
                  transition: stroke 100ms;
                }
              }
            }
            svg {
              fill: none;
              stroke: ${({ theme }) => theme.navigation.hamburger.colorIdle};
              width: 2.4rem;
              height: 2.4rem;
              padding: 0.4rem;
              transition: stroke 100ms;
              margin-right: 0.4rem;
            }
          }
        `
      : null};
`;
