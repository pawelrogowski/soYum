import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { ThemeSwitch } from "./components/ThemeToggle/ThemeSwitch";
import { Container } from "./components/Container/Container";
import { RegisterForm } from "./components/Forms/RegisterForm/RegisterForm";
import { Button } from "./components/Button/Button";
export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeSwitch />
        <Container>
          <RegisterForm />
          <Button>asd</Button>
          <Button variant="outlineSmall">asd</Button>
          <Button variant="outlineBig">asd</Button>
          <Button variant="rectBig">asd</Button>
          <Button variant="rectSmall">asd</Button>
          <Button variant="rectSmallDisabled">asd</Button>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};
