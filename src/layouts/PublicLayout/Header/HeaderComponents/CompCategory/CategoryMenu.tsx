import { SCategoryButtonsMenu } from "./SCompCategory";
import { useGetCategorys } from "@src/hooks/useGetCategorys";

export function CategoryButtons() {
  const { categorys } = useGetCategorys();
  return (
    <SCategoryButtonsMenu>
      {categorys?.map((category) => {
        return (
          <div key={category.id}>
            <button>
              <h3>{category.name}</h3>
            </button>
          </div>
        );
      })}
    </SCategoryButtonsMenu>
  );
}
