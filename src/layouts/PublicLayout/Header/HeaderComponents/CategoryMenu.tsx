import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { SCategoryMenu } from "../Header.style";

export function Category() {
  const { categoryes } = useContext(GlobalContext);
  return (
    <SCategoryMenu>
      {categoryes.map((item) => {
        return (
          <div key={item.id}>
            <button>
              <h3>{item.category}</h3>
            </button>
          </div>
        );
      })}
    </SCategoryMenu>
  );
}
