import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SProducts } from "./SProducts";
import { useEffect } from "react";
import { Button } from "antd";
import { BaseAxios } from "@src/utils/Base_Axios";

export function Products() {
  const { products, setProducts } = useGlobalProvider();
  async function Getproducts() {
    const responsive = await BaseAxios.get("/product");
    setProducts(responsive.data.products);
    console.log(responsive.data);
  }
  useEffect(() => {
    Getproducts();
  }, []);

  return (
    <SProducts className="mt-52">
      <div className="container">
        {products?.map((item) => {
          if (item.salePrice === null) {
            return (
              <div
                key={item.id}
                className="h-full border-none cursor-pointer text-start p-3 bg-cyan-50"
              >
                <h3>{item.title}</h3>
                <img className="h-80" src={item.image} alt="SaleProducts" />
                <h3>Price: {item.price}$</h3>
                <div className="flex justify-between">
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
    </SProducts>
  );
}
