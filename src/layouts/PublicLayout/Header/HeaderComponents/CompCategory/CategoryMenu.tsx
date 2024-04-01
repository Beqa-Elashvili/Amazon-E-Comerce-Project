import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useNavigate } from "react-router-dom";
import { UseGetCategoryProducts } from "@src/hooks/useGetCategoryProducts/UseGetCategoryProducts";

export function CategoryButtons() {
  const navigate = useNavigate();
  const { categorys } = useGetCategorys();

  function handleButtonCategory(categoryName: string) {
    navigate(`/Category_Products_Page/${categoryName}`);
  }
  return (
    <SCategoryButtonsMenu>
      {categorys?.map((category) => {
        return (
          <div key={category.id}>
            <button
              className="flex items-center"
              onClick={() => handleButtonCategory(category.name)}
            >
              <h3>{category.name}</h3>
            </button>
          </div>
        );
      })}
    </SCategoryButtonsMenu>
  );
}
