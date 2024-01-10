import { PropsWithChildren, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { v4 as uuidv4 } from "uuid";
import { Locale_Enum } from "../LocaleProvaider/LocaleContext";
import { FormattedMessage, useIntl } from "react-intl";
const Categoryes = [
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
  const [categorys, setCategorys] = useState(Categoryes);

  return (
    <GlobalContext.Provider value={{ categorys, setCategorys }}>
      {children}
    </GlobalContext.Provider>
  );
}
