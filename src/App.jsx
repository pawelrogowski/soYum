import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LoaderDots } from "./components/LoaderDots/LoaderDots";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/themes";
import { EditUserModal } from "./components/EditUserModal/EditUserModal";

// layouts
const AuthLayout = lazy(() => import("./layouts/AuthLayout/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout/MainLayout"));

// pages
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const StartPage = lazy(() => import("./pages/StartPage/StartPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CategoriesPage = lazy(() =>
  import("./pages/CategoriesPage/CategoriesPage.jsx")
);
const MyRecipesPage = lazy(() =>
  import("./pages/MyRecipesPage/MyRecipesPage.jsx")
);
const FavoritesPage = lazy(() =>
  import("./pages/FavoritesPage/FavoritesPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

export const App = () => {
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

  // this is to prevent white bg flash on page refreshes
  // without sacraficing smooth theme switching for body background
  useEffect(() => {
    setIsTransitionEnabled(true);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles isTransitionEnabled={isTransitionEnabled} />
      <Router basename="/">
        <AnimatePresence mode="wait">
          <EditUserModal />
          <Suspense fallback={<LoaderDots />}>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route element={<AuthLayout />}>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<MainLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/categories" element={<CategoriesPage />}>
                  <Route path=":category" element={<CategoriesPage />} />
                </Route>
                <Route path="/myrecipes" element={<MyRecipesPage />}>
                  <Route path=":page" element={<MyRecipesPage />} />
                </Route>
                <Route path="/favorites" element={<FavoritesPage />}>
                  <Route path=":page" element={<FavoritesPage />} />
                </Route>
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};
