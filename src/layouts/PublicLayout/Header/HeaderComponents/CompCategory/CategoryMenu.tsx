import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SCategoryButtonsMenu } from "./SCompCategory";

export function CategoryButtons() {
  const { categorys } = useGlobalProvider();
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
