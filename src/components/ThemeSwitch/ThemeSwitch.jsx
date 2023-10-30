import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../redux/slices/globalSlice";
import { StyledLabel } from "./ThemeSwitch.styled";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);

  const handleThemeChange = () => {
    dispatch(toggleTheme(!isDarkTheme));
  };

  return (
    <StyledLabel htmlFor="theme-switch">
      <input
        name="theme-switch"
        id="theme-switch"
        type="checkbox"
        onChange={handleThemeChange}
        defaultChecked={isDarkTheme}
      />
      <span></span>
    </StyledLabel>
  );
};
