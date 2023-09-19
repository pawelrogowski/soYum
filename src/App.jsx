import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./styles/themes";
import { LoaderDots } from "./components/LoaderDots/LoaderDots";
import { GlobalStyles } from "./styles/globalStyles";

// layouts
const AuthLayout = lazy(() => import("./layouts/AuthLayout/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout/MainLayout"));

// pages
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const StartPage = lazy(() => import("./pages/StartPage/StartPage.jsx"));

export const App = () => {
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router basename="/">
        <LoaderDots />
        <Suspense fallback={<LoaderDots />}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route element={<AuthLayout />}>
              <Route
                path="/signin"
                element={
                  <Suspense fallback={<LoaderDots />}>
                    <SignInPage />
                  </Suspense>
                }
              />
              <Route
                path="/register"
                element={
                  <Suspense fallback={<LoaderDots />}>
                    <RegisterPage />
                  </Suspense>
                }
              />
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
