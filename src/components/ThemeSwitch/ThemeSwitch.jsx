import { useDispatch, useSelector } from "react-redux";
import { StyledLabel } from "./ThemeSwitch.styled";
import { toggleTheme } from "../../redux/slices/globalSlice";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);

  const handleThemeChange = () => {
    dispatch(toggleTheme(!isDarkTheme));
  };

  return (
    <StyledLabel>
      <input
        type="checkbox"
        onChange={handleThemeChange}
        defaultChecked={isDarkTheme}
      />
      <span></span>
    </StyledLabel>
  );
};
