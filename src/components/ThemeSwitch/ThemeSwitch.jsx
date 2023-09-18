import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StyledLabel } from "./ThemeSwitch.styled";

export const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <StyledLabel>
      <input type="checkbox" onChange={toggleTheme} />
      <span className="slider"></span>
    </StyledLabel>
  );
};
