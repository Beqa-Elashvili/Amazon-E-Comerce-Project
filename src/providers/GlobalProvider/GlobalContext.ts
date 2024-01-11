import { Dispatch, SetStateAction, createContext } from "react";

interface TGlobalContext {
  categorys: {
    category: string;
    Id: string;
  }[];

  categoryes: {
    category: string;
    id: string;
  }[];

  setCategorys: Dispatch<
    SetStateAction<
      {
        category: string;
        Id: string;
      }[]
    >
  >;
  setCategoryes: Dispatch<
    SetStateAction<
      {
        category: string;
        id: string;
      }[]
    >
  >;
}

export const GlobalContext = createContext<TGlobalContext>({
  categorys: [],
  categoryes: [],
  setCategorys: () => {},
  setCategoryes: () => {},
});
