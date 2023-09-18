import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledLabel } from "./ThemeSwitch.styled";
import { changeTheme } from "../../redux/slices/globalSlice";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);
  const [isChecked, setIsChecked] = useState(isDarkTheme);

  const handleThemeChange = () => {
    dispatch(changeTheme(!isDarkTheme));
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
