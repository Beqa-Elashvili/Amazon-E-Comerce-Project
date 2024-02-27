import { Dispatch, ReactNode, SetStateAction, createContext } from "react";

export type TGender = {
  label: string;
  value: string;
  id: string;
};
export type TCategorys = {
  image: ReactNode;
  icon: ReactNode;
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
};
export type TProducts = {
  product_id: string;
  likedProduct: any;
  cartProduct: any;
  count: number;
  category_name: string;
  created_at: string;
  description: string;
  id: string;
  image: string;
  price: number;
  salePrice: number;
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
  CategoryName: string | undefined;
  setCategoryName: Dispatch<SetStateAction<string | undefined>>;

  categoryProducts: TProducts[] | undefined;
  setCategoryProducts: Dispatch<SetStateAction<TProducts[] | undefined>>;

  wishlist: TProducts[] | undefined;
  setwishlist: Dispatch<SetStateAction<TProducts[] | undefined>>;

  products: TProducts[] | undefined;
  setProducts: Dispatch<SetStateAction<TProducts[] | undefined>>;

  saleProducts: TProducts[] | undefined;
  setSaleProducts: Dispatch<SetStateAction<TProducts[] | undefined>>;

  cartProducts: TProducts[] | undefined;
  setCartProducts: Dispatch<SetStateAction<TProducts[] | undefined>>;

  categorys: TCategorys[] | undefined;
  setCategorys: Dispatch<SetStateAction<TCategorys[] | undefined>>;

  ChooceGender: TGender[];
  setChooceGender: Dispatch<SetStateAction<TGender[]>>;

  selectedGender: string | undefined;
  setSelectedGender: Dispatch<SetStateAction<string | undefined>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  CategoryName: undefined,
  setCategoryName: () => {},
  categoryProducts: [],
  setCategoryProducts: () => {},
  wishlist: [],
  setwishlist: () => {},
  products: [],
  setProducts: () => {},
  saleProducts: [],
  setSaleProducts: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  selectedGender: undefined,
  setSelectedGender: () => {},
  ChooceGender: [],
  setChooceGender: () => {},
  categorys: [],
  footerLinks: [],
  setFooterLinks: () => {},
  setCategorys: () => {},
});
