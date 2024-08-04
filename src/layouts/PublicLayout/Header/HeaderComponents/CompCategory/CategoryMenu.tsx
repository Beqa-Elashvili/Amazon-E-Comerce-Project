import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";
import {
  TCategorys,
  TEnCategorys,
} from "@src/providers/GlobalProvider/GlobalContext";
import { useNavigate } from "react-router-dom";
import { LocaleContext } from "@src/providers/LocaleProvaider/LocaleContext";
import { useContext } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function CategoryButtons() {
  const navigate = useNavigate();
  const { categorys } = useGetCategorys();
  const { locale } = useContext(LocaleContext);
  const { EnCategorysState } = useGlobalProvider();

  const handleButtonCategory = (
    categoryName: string,
    productName: string,
    page: number
  ) => {
    let Tranlatecategory = categoryName;
    {
      switch (categoryName) {
        case "Audio":
          Tranlatecategory = "აუდიო";
          break;
        case "Photo | Video":
          Tranlatecategory = "ფოტო | ვიდეო";
          break;
        case "Gaming":
          Tranlatecategory = "გეიმინგი";
          break;
        case "TV | Monitors":
          Tranlatecategory = "TV | მონიტორები";
          break;
        case "Tables":
          Tranlatecategory = "ტაბები";
          break;
        case "Laptops":
          Tranlatecategory = "ლეპტოპები";
          break;
        case "Smartphones":
          Tranlatecategory = "სმარტფონები";
          break;
        case "Tools":
          Tranlatecategory = "ხელსაწყოები";
          break;
      }
    }
    navigate(
      `/Category_Products_Page/${Tranlatecategory}/${productName}/${page}`
    );
  };
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
