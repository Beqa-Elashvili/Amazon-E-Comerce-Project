import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SSaleProducts } from "./SSaleProducts";

export function SaleProducts() {
  const { products, setProducts } = useGlobalProvider();
  async function Getproducts() {
    const responsive = await BaseAxios.get("/product");
    setProducts(responsive.data.products);
    console.log(responsive.data.products);
  }
  useEffect(() => {
    Getproducts();
  }, []);

  return (
    <SSaleProducts className="absolute">
      <div className="container">
        {products?.map((item) => {
          if (item.salePrice !== null) {
            return (
              <button
                key={item.id}
                className="h-full border-none cursor-pointer text-start p-3 bg-cyan-50"
              >
                <h1 className="text-red-800">Hot Sale</h1>
                <h3>{item.title}</h3>
                <img className="h-80" src={item.image} alt="SaleProducts" />
                <p className="line-through">OldPrice: {item.price}$</p>
                <h3>Price:{item.salePrice}$</h3>
              </button>
            );
          }
        })}
      </div>
    </SSaleProducts>
  );
}
