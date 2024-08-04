import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";
import {
  TCategorys,
  TEnCategorys,
} from "@src/providers/GlobalProvider/GlobalContext";
import { LocaleContext } from "@src/providers/LocaleProvaider/LocaleContext";
import { useContext } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useHandleButtonCategory } from "@src/hooks/useHandleButtonCategory";

export function CategoryButtons() {
  const { handleButtonCategory } = useHandleButtonCategory();
  const { categorys } = useGetCategorys();
  const { locale } = useContext(LocaleContext);
  const { EnCategorysState } = useGlobalProvider();

  return (
    <SCategoryButtonsMenu>
      <>
        {locale !== "ka" ? (
          <>
            {EnCategorysState.map((category: TEnCategorys) => {
              return (
                <div className="hidden lg:block" key={category.id}>
                  <button
                    className="flex items-center"
                    onClick={() =>
                      handleButtonCategory(category.name, "productName", 1)
                    }
                  >
                    <h3>{category.name}</h3>
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {categorys?.map((category: TCategorys) => {
              return (
                <div className="hidden lg:block" key={category.id}>
                  <button
                    className="flex items-center"
                    onClick={() =>
                      handleButtonCategory(category.name, "productName", 1)
                    }
                  >
                    <h3>{category.name}</h3>
                  </button>
                </div>
              );
            })}
          </>
        )}
      </>
    </SCategoryButtonsMenu>
  );
}
