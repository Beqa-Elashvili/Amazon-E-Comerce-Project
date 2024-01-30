import { useContext } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { BackSlider } from "./HomeComponents";

export function Home() {
  const { userData } = useAuthPRovider();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <SHome>
      {/* <BackSlider /> */}
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
