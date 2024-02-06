import { Dispatch, SetStateAction, createContext } from "react";

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
export type TProducts = {
  category_name: string;
  created_at: string;
  description: string;
  id: string;
  image: string;
  price: number;
  salePrice: string;
  title: string;
  updated_at: string;
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

  products: TProducts[] | undefined;
  setProducts: Dispatch<SetStateAction<TProducts[] | undefined>>;

  categorys: TCategorys[] | undefined;
  setCategorys: Dispatch<SetStateAction<TCategorys[] | undefined>>;

  ChooceGender: TGender[];
  setChooceGender: Dispatch<SetStateAction<TGender[]>>;

  selectedGender: string | undefined;
  setSelectedGender: Dispatch<SetStateAction<string | undefined>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  products: [],
  setProducts: () => {},
  selectedGender: undefined,
  setSelectedGender: () => {},
  ChooceGender: [],
  setChooceGender: () => {},
  categorys: undefined,
  footerLinks: [],
  setFooterLinks: () => {},
  setCategorys: () => {},
});
