import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { LoaderDots } from "../components/LoaderDots/LoaderDots";
import { LocationProvider } from "../components/LocationProvider/LocationProvider.jsx";

// layouts
const AuthLayout = lazy(() => import("../layouts/AuthLayout/AuthLayout"));
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));

// import AddRecipePage from "../pages/AddRecipePage/AddRecipePage.jsx";
// import CategoriesPage from "../pages/CategoriesPage/CategoriesPage.jsx";
// import FavoritesPage from "../pages/FavoritesPage/FavoritesPage.jsx";
// import HomePage from "../pages/HomePage/HomePage.jsx";
// import MyRecipesPage from "../pages/MyRecipesPage/MyRecipesPage.jsx";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
// import RegisterPage from "../pages/RegistrationPage/RegistrationPage.jsx";
// import SearchPage from "../pages/SearchPage/SearchPage.jsx";
// import SignInPage from "../pages/SignInPage/SignInPage.jsx";
// import StartPage from "../pages/StartPage/StartPage.jsx";
// pages
const SignInPage = lazy(() => import("../pages/SignInPage/SignInPage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage.jsx"));
const StartPage = lazy(() => import("../pages/StartPage/StartPage.jsx"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage/CategoriesPage.jsx"));
const MyRecipesPage = lazy(() => import("../pages/MyRecipesPage/MyRecipesPage.jsx"));
const AddRecipePage = lazy(() => import("../pages/AddRecipePage/AddRecipePage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage/FavoritesPage.jsx"));
const SearchPage = lazy(() => import("../pages/SearchPage/SearchPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));

export const AppRoutes = () => {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname.split("/").length === 2) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  //this exist to force initial loading of components during framer animation instead of waiting for it to finish
  switch (location.pathname) {
    case "/signin":
      import("../pages/SignInPage/SignInPage.jsx");
      break;
    case "/register":
      import("../pages/RegistrationPage/RegistrationPage.jsx");
      break;
    case "/":
      import("../pages/StartPage/StartPage.jsx");
      break;
    case "/home":
      import("../pages/HomePage/HomePage.jsx");
      break;
    case "/categories":
      import("../pages/CategoriesPage/CategoriesPage.jsx");
      break;
    case "/myrecipes":
      import("../pages/MyRecipesPage/MyRecipesPage.jsx");
      break;
    case "/add":
      import("../pages/AddRecipePage/AddRecipePage");
      break;
    case "/favorites":
      import("../pages/FavoritesPage/FavoritesPage.jsx");
      break;
    case "/search":
      import("../pages/SearchPage/SearchPage.jsx");
      break;
    case "/404":
      import("../pages/NotFoundPage/NotFoundPage.jsx");
      break;
  }

  return (
    <Suspense fallback={<LoaderDots />}>
      <LocationProvider>
        <Routes location={location} key={location.key}>
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
            <Route path="/add" element={<AddRecipePage />} />
            <Route path="/myrecipes" element={<MyRecipesPage />}>
              <Route path=":page" element={<MyRecipesPage />} />
            </Route>
            <Route path="/favorites" element={<FavoritesPage />}>
              <Route path=":page" element={<FavoritesPage />} />
            </Route>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LocationProvider>
    </Suspense>
  );
};
