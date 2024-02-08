import { Button } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SSaleProducts } from "./SSaleProducts";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";

export function SaleProducts() {
  const { saleProducts, setSaleProducts } = useGlobalProvider();

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
                className="h-full border-none cursor-pointer text-start p-3 bg-cyan-50"
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
                <div className="flex justify-between mt-2">
                  <Button type="primary" className="w-40">
                    Buy Now
                  </Button>
                  <Button className="w-20">Add Cart</Button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </SSaleProducts>
  );
}
