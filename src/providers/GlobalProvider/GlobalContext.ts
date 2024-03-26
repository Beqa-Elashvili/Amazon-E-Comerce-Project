import { TUserData } from "@src/@types/TuserData";
import { TourProps } from "antd";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";

export type TUserChangeValues = {
  kay: string | number | undefined;
  value: string | number | undefined;
};

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
  likedProduct: TProducts;
  cartProduct: TProducts;
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

  countries: {
    country: string;
  }[];

  setcountries: Dispatch<
    SetStateAction<
      {
        country: string;
      }[]
    >
  >;

  states: {
    id: string;
    Name: string;
  }[];
  setStates: Dispatch<
    SetStateAction<
      {
        id: string;
        Name: string;
      }[]
    >
  >;

  openLocationModal: boolean;
  setOpenLocationModal: Dispatch<SetStateAction<boolean>>;

  zipCode: string;
  setZipCode: Dispatch<SetStateAction<string>>;

  location: string;
  setLocation: Dispatch<SetStateAction<string>>;

  product: TProducts | undefined;
  setProduct: Dispatch<SetStateAction<TProducts | undefined>>;

  collapsed: boolean | undefined;
  setCollapsed: Dispatch<SetStateAction<boolean | undefined>>;

  userdata: TUserData | undefined;
  setUserData: Dispatch<SetStateAction<TUserData | undefined>>;

  forChange: TUserChangeValues | undefined;
  setForChange: Dispatch<SetStateAction<TUserChangeValues | undefined>>;

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
  states: [],
  setStates: () => {},
  openLocationModal: false,
  setOpenLocationModal: () => {},
  zipCode: "",
  setZipCode: () => {},
  location: "",
  setLocation: () => {},
  countries: [],
  setcountries: () => {},
  product: undefined,
  setProduct: () => {},
  collapsed: undefined,
  setCollapsed: () => {},
  userdata: undefined,
  setUserData: () => {},
  forChange: undefined,
  setForChange: () => {},
  selectedGender: undefined,
  setSelectedGender: () => {},
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
  ChooceGender: [],
  setChooceGender: () => {},
  categorys: [],
  footerLinks: [],
  setFooterLinks: () => {},
  setCategorys: () => {},
});
