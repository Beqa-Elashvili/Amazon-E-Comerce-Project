import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { v4 as uuidv4 } from "uuid";

const Categoryes = [
  { category: "Best Sellers", id: uuidv4() },
  { category: "Books", id: uuidv4() },
  { category: "Pharmacy", id: uuidv4() },
  { category: "Music", id: uuidv4() },
  { category: "Today's Deals", id: uuidv4() },
  { category: "Customer Service", id: uuidv4() },
  { category: "Whole Foods", id: uuidv4() },
];

const SelectCategorys = [
  {
    category: "Telephone",
    Id: uuidv4(),
  },
  {
    category: "Computer",
    Id: uuidv4(),
  },
  {
    category: "Games Console",
    Id: uuidv4(),
  },
];

export function GlobalProvider({ children }: PropsWithChildren) {
  const [categorys, setCategorys] = useState(SelectCategorys);
  const [categoryes, setCategoryes] = useState(Categoryes);

  return (
    <GlobalContext.Provider
      value={{ categorys, setCategorys, categoryes, setCategoryes }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
