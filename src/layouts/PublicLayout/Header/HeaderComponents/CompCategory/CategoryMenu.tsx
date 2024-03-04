import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";
import { useNavigate } from "react-router-dom";

export function CategoryButtons() {
  const navigate = useNavigate();
  const { categorys } = useGetCategorys();
  const { getCategoryProducts } = useGetCategoryProducts();

  function handleButtonCategory(category: string) {
    getCategoryProducts(category);
    navigate("/Category_Products_Page")
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
