import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SProducts } from "./SProducts";
import { Button } from "antd";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { useAddinCart } from "@src/hooks/useAddtoCart/useAddinCart";
import { useGetProducts } from "@src/hooks/useGetProducts";

export function Products() {
  const { products } = useGetProducts();
  const { authStatus } = useAuthPRovider();
  const { addtoCart, loading: addtoCartLoading } = useAddinCart();

  return (
    <SProducts className="mt-52">
      <div className="container">
        {products?.slice(0, 12).map((item) => {
          if (item.salePrice === null) {
            return (
              <div
                key={item.id}
                className="h-full border-none cursor-pointer text-start p-3 bg-white rounded-lg"
              >
                <h3>{item.title}</h3>
                <img
                  className="h-80 mt-2"
                  src={item.image}
                  alt="SaleProducts"
                />
                <h3 className="mt-2">Price: {item.price}$</h3>
                {authStatus === "authorized" ? (
                  <div className="flex justify-between mt-2">
                    <Button className="w-40 bg-amber-400">Buy Now</Button>
                    <Button
                      loading={addtoCartLoading}
                      icon={<FaCartArrowDown />}
                      onClick={() => addtoCart(item.id)}
                    >
                      Add Cart
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full bg-amber-400 mt-2">Buy Now</Button>
                )}
              </div>
            );
          }
        })}
      </div>
    </SProducts>
  );
}
