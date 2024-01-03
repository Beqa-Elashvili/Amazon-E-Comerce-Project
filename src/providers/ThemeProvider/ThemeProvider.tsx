import { PropsWithChildren, useState, useCallback, useEffect } from "react";
import { ThemeContext, ThemeModes_Enum } from "./ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalCss from "@src/assets/global.styled";
import "@src/assets/global.css";

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeModes_Enum>(
    ThemeModes_Enum.LIGHT
  );

  const colors = {
    [ThemeModes_Enum.LIGHT]: {
      primary: "red",
    },
    [ThemeModes_Enum.DARK]: {
      primary: "#000000",
    },
  };

  const toggleTheme = useCallback(() => {
    if (themeMode === ThemeModes_Enum.LIGHT) {
      setThemeMode(ThemeModes_Enum.DARK);
      localStorage.setItem("theme_mode", ThemeModes_Enum.DARK);
    } else if (themeMode === ThemeModes_Enum.DARK) {
      setThemeMode(ThemeModes_Enum.LIGHT);
      localStorage.setItem("theme_mode", ThemeModes_Enum.LIGHT);
    }
  }, [themeMode]);

  useEffect(() => {
    if (localStorage.getItem("theme_mode")) {
      setThemeMode(localStorage.getItem("theme_mode") as ThemeModes_Enum);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      <StyledThemeProvider
        theme={{ colors: colors[themeMode], mode: themeMode }}
      >
        <GlobalCss />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
