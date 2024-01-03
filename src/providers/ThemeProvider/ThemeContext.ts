import { createContext } from "react";

export enum ThemeModes_Enum {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

type ThemeContextValues = {
  themeMode: ThemeModes_Enum;
  toggleTheme: () => void;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModes_Enum>>;
};

export const ThemeContext = createContext<ThemeContextValues>({
  themeMode: ThemeModes_Enum.LIGHT,
  setThemeMode: () => {},
  toggleTheme: () => {},
});
