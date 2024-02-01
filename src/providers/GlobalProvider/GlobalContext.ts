import { TARGET_CLS } from "antd/es/_util/wave/interface";
import { Dispatch, SetStateAction, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export type TGender = {
  label: string;
  value: string;
  id: string;
};
export type TCategorys = {
  created_at: string | undefined;
  id: string | undefined;
  name: string | undefined;
  updated_at: string | undefined;
};

interface TGlobalContext {
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

  categorys: TCategorys[] | undefined;
  setCategorys: Dispatch<SetStateAction<TCategorys[] | undefined>>;

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
  categorys: undefined,
  footerLinks: [],
  setFooterLinks: () => {},
  setCategorys: () => {},
});
