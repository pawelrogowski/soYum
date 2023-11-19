import styled from "styled-components";

export const StyledLabel = styled.label`
  --color-themeSwitch-bgOff: ${({ theme: t }) => t.themeSwitch.bgOff};
  --color-themeSwitch-bgOn: ${({ theme: t }) => t.themeSwitch.bgOn};

  position: relative;
  display: inline-block;
  width: 6.1rem;
  height: 2.7rem;
  z-index: 2;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > span {
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-themeSwitch-bgOff);
    transition: box-shadow 400ms, transform 400ms;
    border-radius: 3.4rem;
  }

  > span:before {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    position: absolute;
    content: "";
    height: 2.1rem;
    width: 2.135rem;
    left: 0.305rem;
    bottom: 0.3rem;
    background-color: rgba(250, 250, 250, 1);
    transition: box-shadow 400ms, transform 400ms;
    border-radius: 50%;
  }

  > input:checked + span {
    background-color: var(--color-themeSwitch-bgOn);
    box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.2);
  }

  > input:checked + span:before {
    box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
    transform: translateX(3.2rem);
  }
`;
