import { useEffect, useContext } from "react";
import { axiosInstance } from "@src/utils/publicAxios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  async function getPosts() {
    const posts = await axiosInstance.get("/posts");
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
