import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// import { LoaderDots } from "../components/LoaderDots/LoaderDots";
import { LocationProvider } from "../components/LocationProvider/LocationProvider.jsx";
import usePreloadOnHover from "../hooks/usePreloadOnHover.js";

// layouts
const AuthLayout = lazy(() => import("../layouts/AuthLayout/AuthLayout"));
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));

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
const ShoppingListPage = lazy(() => import("../pages/ShoppingListPage/ShoppingListPage.jsx"));
const RecipePage = lazy(() => import("../pages/RecipePage/RecipePage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage.jsx"));

export const AppRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    const noScrollBlacklist = ["/recipes/1", "/recipes/2"];
    if (!noScrollBlacklist.includes(location.pathname)) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    }
  }, [location]);

  usePreloadOnHover([
    { to: "/signin", component: "SignInPage" },
    { to: "/register", component: "RegistrationPage" },
    { to: "/", component: "StartPage" },
    { to: "/home", component: "HomePage" },
    { to: "/categories/beef", component: "CategoriesPage" },
    { to: "/myrecipes", component: "MyRecipesPage" },
    { to: "/add", component: "AddRecipePage" },
    { to: "/favorites", component: "FavoritesPage" },
    { to: "/search", component: "SearchPage" },
    { to: "/shoppinglist", component: "ShoppingListPage" },
  ]);

  return (
    <Suspense fallback={null}>
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
            <Route path="/recipe" element={<RecipePage />}>
              <Route path=":recipeId" element={<RecipePage />} />
            </Route>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/shoppinglist" element={<ShoppingListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LocationProvider>
    </Suspense>
  );
};
