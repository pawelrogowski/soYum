import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";

// layouts
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";

//pages
const SignInPage = lazy(
  async () => await import("./pages/SignInPage/SignInPage.jsx")
);
const RegisterPage = lazy(
  async () => await import("./pages/RegistrationPage/RegistrationPage.jsx")
);

export const App = () => {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AuthLayout />}>
        <Route index path="signin" element={<SignInPage />} />
        <Route
          path="register"
          element={
            // this fallback is to prevent flashing of the form
            // since the fallback is already cached at this point
            // it guarantees smooth transition with virtually no cost
            <Suspense fallback={<SignInPage />}>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Suspense fallback={<AuthLayout />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};
