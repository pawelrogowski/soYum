import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext, lazy, Suspense } from "react";
import { StartPage } from "./pages/StartPage/StartPage";
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
      <Route>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/signin" />} />
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
