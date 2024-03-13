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

  sliderValue: number[];
  setSliderValue: Dispatch<SetStateAction<number[]>>;

  CategoryName: string;
  setCategoryName: Dispatch<SetStateAction<string>>;

  categoryProducts: TProducts[];
  setCategoryProducts: Dispatch<SetStateAction<TProducts[]>>;

  wishlist: TProducts[];
  setwishlist: Dispatch<SetStateAction<TProducts[]>>;

  products: TProducts[];
  setProducts: Dispatch<SetStateAction<TProducts[]>>;

  saleProducts: TProducts[];
  setSaleProducts: Dispatch<SetStateAction<TProducts[]>>;

  cartProducts: TProducts[];
  setCartProducts: Dispatch<SetStateAction<TProducts[]>>;

  categorys: TCategorys[];
  setCategorys: Dispatch<SetStateAction<TCategorys[]>>;

  ChooceGender: TGender[];
  setChooceGender: Dispatch<SetStateAction<TGender[]>>;

  selectedGender: string | undefined;
  setSelectedGender: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  sliderValue: [],
  setSliderValue: () => {},
  CategoryName: "",
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
