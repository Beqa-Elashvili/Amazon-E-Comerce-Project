import { Button } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SSaleProducts } from "./SSaleProducts";

export function SaleProducts() {
  const { products } = useGlobalProvider();

  return (
    <SSaleProducts className="absolute">
      <div className="container">
        {products?.map((item) => {
          if (item.salePrice !== null) {
            return (
              <div
                key={item.id}
                className="h-full border-none cursor-pointer text-start p-3 bg-cyan-50"
              >
                <h1 className="text-red-800">Hot Sale</h1>
                <h3>{item.title}</h3>
                <img className="h-80" src={item.image} alt="SaleProducts" />
                <p className="line-through">OldPrice: {item.price}$</p>
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
