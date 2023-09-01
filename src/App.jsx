import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { ThemeSwitch } from "./components/ThemeToggle/ThemeSwitch";
import { Container } from "./components/Container/Container";
import { RegisterForm } from "./components/Forms/RegisterForm/RegisterForm";
import { Button } from "./components/Button/Button";
import { Icon } from "./components/Icon/Icon";
export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeSwitch />
        <Container>
          <RegisterForm />
          <Button />
          <Button variant="outlineSmall" />
          <Button variant="outlineBig" />
          <Button variant="rectBig" />
          <Button variant="rectSmall" />
          <Button variant="rectSmallDisabled" />
          <Icon icon="arrow_long" />
          <Icon icon="arrow_slim" />
          <Icon icon="camera" />
          <Icon icon="capture" />
          <Icon icon="checkbox" />
          <Icon icon="checkmark_round" />
          <Icon icon="clock" />
          <Icon icon="edit" />
          <Icon icon="facebook" />
          <Icon icon="hamburger" />
          <Icon icon="instagram" />
          <Icon icon="lock" />
          <Icon icon="login_background" />
          <Icon icon="logo" />
          <Icon icon="minus" />
          <Icon icon="plus" />
          <Icon icon="search" />
          <Icon icon="spec_rectangle" />
          <Icon icon="spec_round" />
          <Icon icon="trash" />
          <Icon icon="twitter" />
          <Icon icon="user" />
          <Icon icon="x" />
          <Icon icon="youtube" />
          <Icon icon="warning" />
          <Icon icon="lock" />
          <Icon icon="envelope" />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};
