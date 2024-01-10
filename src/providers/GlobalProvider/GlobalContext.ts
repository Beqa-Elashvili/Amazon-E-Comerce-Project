import { Dispatch, SetStateAction, createContext } from "react";

interface TGlobalContext {
  categorys: {
    category: string;
    Id: string;
  }[];

  setCategorys: Dispatch<
    SetStateAction<
      {
        category: string;
        Id: string;
      }[]
    >
  >;
}

export const GlobalContext = createContext<TGlobalContext>({
  categorys: [],
  setCategorys: () => {},
});
