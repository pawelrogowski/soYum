import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { Loader } from "./components/Loader/Loader.styled";
// layouts
const AuthLayout = lazy(
  async () => await import("./layouts/AuthLayout/AuthLayout")
);
const MainLayout = lazy(
  async () => await import("./layouts/MainLayout/MainLayout")
);

//pages
const SignInPage = lazy(
  async () => await import("./pages/SignInPage/SignInPage.jsx")
);
const RegisterPage = lazy(
  async () => await import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const StartPage = lazy(
  async () => await import("./pages/StartPage/StartPage.jsx")
);

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router basename="/">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path="/home" element={null} />
              <Route path="/404" element={null} />
            </Route>
            <Route path="*"></Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};
