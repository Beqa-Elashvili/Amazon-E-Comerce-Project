import { Dispatch, SetStateAction, createContext } from "react";

interface TGlobalContext {
  categorys: {
    category: string;
    Id: string;
  }[];

  footerLinks: {
    Carrer: string;
    Name: string;
    id: string;
  }[];

  setFooterLinks: Dispatch<
    SetStateAction<
      {
        Carrer: string;
        Name: string;
        id: string;
      }[]
    >
  >;

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
  footerLinks: [],
  setFooterLinks: () => {},
  setCategorys: () => {},
  setCategoryes: () => {},
});
