import { useContext } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "./HomeComponents";
import { Categorys } from "@src/components/Categorys";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <SHome>
      <Categorys />
      <BackSlider />
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
