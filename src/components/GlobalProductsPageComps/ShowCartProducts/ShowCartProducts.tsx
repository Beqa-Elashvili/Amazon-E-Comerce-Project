import { useEffect, useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function ShowCartProcuts() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const { cartProducts } = useGlobalProvider();

  useEffect(() => {
    if (cartProducts.length === 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [cartProducts]);

  return (
    <div>
      {isEmpty ? (
        <div className="flex flex-col border-solid h-full border-y-0 border-r-0 border-l p-2 max-w-40">
          {cartProducts?.map((item) => {
            return <div key={item.id}>{item.cartProduct.title}</div>;
          })}
        </div>
      ) : undefined}
    </div>
  );
}
