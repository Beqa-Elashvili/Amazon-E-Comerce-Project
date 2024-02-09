import { Button } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SSaleProducts } from "./SSaleProducts";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";

export function SaleProducts() {
  const { saleProducts, setSaleProducts } = useGlobalProvider();
  const { authStatus } = useAuthPRovider();

  async function GetSaleProducts() {
    const resp = await BaseAxios.get("/product?onlySales=true");
    setSaleProducts(resp.data.products.slice(0, 4));
  }
  useEffect(() => {
    GetSaleProducts();
  }, []);

  return (
    <SSaleProducts className="absolute">
      <div className="container">
        {saleProducts?.map((item) => {
          if (item.salePrice !== null) {
            return (
              <div
                key={item.id}
                className="h-full border-none cursor-pointer text-start p-3 bg-white rounded-lg"
              >
                <div className="text-red-800 bg-red-100 inline p-2 rounded-lg">
                  Hot Sale
                </div>
                <h3 className="mt-2">{item.title}</h3>
                <img className="h-80" src={item.image} alt="SaleProducts" />
                <p className="line-through text-red-700">
                  OldPrice: {item.price}
                </p>
                <h3>Price:{item.salePrice}$</h3>
                {authStatus === "authorized" ? (
                  <div className="flex justify-between mt-2">
                    <Button className="w-40  bg-amber-400">Buy Now</Button>
                    <Button icon={<FaCartArrowDown />}>Add Cart</Button>
                  </div>
                ) : (
                  <Button className="w-full bg-amber-400 mt-2">Buy Now</Button>
                )}
              </div>
            );
          }
        })}
      </div>
    </SSaleProducts>
  );
}
