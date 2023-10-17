import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoaderDots } from "../components/LoaderDots/LoaderDots";

// layouts
const AuthLayout = lazy(() => import("../layouts/AuthLayout/AuthLayout"));
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));

// pages
const SignInPage = lazy(() => import("../pages/SignInPage/SignInPage.jsx"));
const RegisterPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage.jsx")
);
const StartPage = lazy(() => import("../pages/StartPage/StartPage.jsx"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CategoriesPage = lazy(() =>
  import("../pages/CategoriesPage/CategoriesPage.jsx")
);
const MyRecipesPage = lazy(() =>
  import("../pages/MyRecipesPage/MyRecipesPage.jsx")
);
const FavoritesPage = lazy(() =>
  import("../pages/FavoritesPage/FavoritesPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

export const AppRoutes = () => (
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
);
