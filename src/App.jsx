import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";

const SignIn = lazy(() => import("./pages/SignInPage/SignInPage.jsx"));
const Register = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/">
        <Suspense>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
