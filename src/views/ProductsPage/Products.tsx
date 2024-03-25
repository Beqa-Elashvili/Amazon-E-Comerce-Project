import { SProducts } from "./SProducts";
import { Button } from "antd";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { useAddWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useIsProductInWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { useNavigate } from "react-router-dom";

export function Products() {
  const { products } = useGetProducts();
  const { authStatus } = useAuthProvider();
  const { addToCart } = useAddinCart();
  const { AddWishlist } = useAddWishlist();
  const { isInWishlist } = useIsProductInWishlist();
  const navigate = useNavigate();

  const handleProduct = (id: string) => {
    navigate(`/OneProductPage/${id}`);
  };

  return (
    <SProducts>
      <div className="container">
        {products?.map((item) => {
          return (
            <div
              key={item.id}
              className="h-full border-none shadow-xl text-start p-3 bg-white rounded-lg"
            >
              <div
                className="cursor-pointer"
                onClick={() => handleProduct(item.id)}
              >
                <h3 className="w-80 h-8">{item.title}</h3>
                <img
                  className="h-80 mt-2"
                  src={item.image}
                  alt="SaleProducts"
                />
              </div>
              <h3 className="mt-2">Price: {item.price}$</h3>
              {authStatus === "authorized" ? (
                <div className="flex justify-between mt-2">
                  <Button className="w-40 bg-amber-400">Buy Now</Button>
                  <Button
                    icon={<FaCartArrowDown />}
                    onClick={() => addToCart(item.id)}
                  >
                    Add Cart
                  </Button>
                  <button
                    className="border-none bg-white cursor-pointer"
                    onClick={() => AddWishlist(item.id)}
                  >
                    {isInWishlist(item.id) ? (
                      <IoIosHeart className="text-red-600 size-8 hover:text-yellow-400" />
                    ) : (
                      <IoIosHeartEmpty className="text-orange-600 size-8 hover:text-orange-400" />
                    )}
                  </button>
                </div>
              ) : (
                <Button className="w-full bg-amber-400 mt-2">Buy Now</Button>
              )}
            </div>
          );
        })}
      </div>
    </SProducts>
  );
}
