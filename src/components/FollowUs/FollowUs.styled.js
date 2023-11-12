import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-icon-idle: ${({ theme: t }) => t.followUs.iconIdle};
  --color-icon-active: ${({ theme: t }) => t.followUs.iconActive};
  display: flex;
  flex-direction: column;
  gap: 4rem;
  ul {
    justify-content: flex-start;
    gap: 2rem;
  }
  a {
    svg {
      width: 2.6rem;
      height: 2.6rem;
      fill: var(--color-icon-idle);
    }
    &:hover,
    &:focus {
      svg {
        fill: var(--color-icon-active);
      }
    }
  }
`;
