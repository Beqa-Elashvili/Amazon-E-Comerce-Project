import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useNavigate } from "react-router-dom";

export function CategoryButtons() {
  const navigate = useNavigate();
  const { categorys } = useGetCategorys();

  function handleButtonCategory(
    categoryName: string,
    productName: string,
    page: number
  ) {
    navigate(`/Category_Products_Page/${categoryName}/${productName}/${page}`);
  }
  return (
    <SCategoryButtonsMenu>
      {categorys?.map((category) => {
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
    </SCategoryButtonsMenu>
  );
}
