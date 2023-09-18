import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../contexts/ThemeContext";
import { StyledLabel } from "./ThemeSwitch.styled";
import { changeTheme } from "../../redux/slices/globalSlice";

export const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);
  const [isChecked, setIsChecked] = useState(isDarkTheme);

  const handleThemeChange = () => {
    dispatch(changeTheme(!isDarkTheme));
    toggleTheme();
  };

  useEffect(() => {
    setIsChecked(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <StyledLabel>
      <input
        type="checkbox"
        onChange={handleThemeChange}
        defaultChecked={isChecked}
      />
      <span></span>
    </StyledLabel>
  );
};
