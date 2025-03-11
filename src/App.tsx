import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTheme } from "./theme/theme";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  // const prefersDarkMode = window.matchMedia(
  //   "(prefers-color-scheme: dark)"
  // ).matches;
  const [themeMode, setThemeMode] = useState<"dark" | "light">(
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light") as "dark" | "light"
  );

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleTheme} variant="contained" sx={{ margin: 2 }}>
        Toggle Theme
      </Button>
      <Dashboard />
      <ToastContainer position="top-right" autoClose={3000} />
    </ThemeProvider>
  );
};

export default App;
