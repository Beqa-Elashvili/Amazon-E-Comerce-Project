import { useEffect, useContext } from "react";
// import { BaseAxios } from "@src/utils/regist_Axios";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  async function getPosts() {
    // const posts = await BaseAxios.get("/posts");
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SHome>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <div className="w-6 h-6"></div> */}
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
