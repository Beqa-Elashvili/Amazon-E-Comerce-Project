import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";

export function CategoryButtons() {
  const { categorys } = useGetCategorys();
  const { getCategoryProducts } = useGetCategoryProducts();
  return (
    <SCategoryButtonsMenu>
      {categorys?.map((category) => {
        return (
          <div key={category.id}>
            <button
              className="flex items-center"
              onClick={() => getCategoryProducts(category.name)}
            >
              <h3>{category.name}</h3>
            </button>
          </div>
        );
      })}
    </SCategoryButtonsMenu>
  );
}
