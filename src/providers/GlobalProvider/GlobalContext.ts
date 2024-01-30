import { TARGET_CLS } from "antd/es/_util/wave/interface";
import { Dispatch, SetStateAction, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export type TGender = {
  label: string;
  value: string;
  id: string;
};

interface TGlobalContext {
  categorys: {
    category: string;
    Id: string;
  }[];

  footerLinks: {
    Destination: string;
    Name: string;
    id: string;
  }[];

  setFooterLinks: Dispatch<
    SetStateAction<
      {
        Destination: string;
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

  ChooceGender: TGender[];
  setChooceGender: Dispatch<SetStateAction<TGender[]>>;

  selectedGender: string | undefined;
  setSelectedGender: Dispatch<SetStateAction<string | undefined>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  selectedGender: undefined,
  setSelectedGender: () => {},
  ChooceGender: [],
  setChooceGender: () => {},
  categorys: [],
  categoryes: [],
  footerLinks: [],
  setFooterLinks: () => {},
  setCategorys: () => {},
  setCategoryes: () => {},
});
