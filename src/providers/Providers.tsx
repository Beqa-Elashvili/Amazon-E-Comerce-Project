import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvaider";
import { AuthProvider } from "./AuthProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <LocaleProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </LocaleProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
