import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import { ThemeProvider } from "./ThemeProvider";
import { LocaleProvider } from "./LocaleProvaider";
type ProvidersProps = {};

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <LocaleProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
