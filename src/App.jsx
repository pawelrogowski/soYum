import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./routes/Routes";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/themes";

export const App = () => {
  const isDarkTheme = useSelector((state) => state.global.isDarkTheme);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

  useEffect(() => {
    setIsTransitionEnabled(true);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles isTransitionEnabled={isTransitionEnabled} />
      <AppRoutes />
    </ThemeProvider>
  );
};
