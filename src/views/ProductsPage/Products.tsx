import { SProducts } from "./SProducts";
import { Button } from "antd";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { useAddWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useIsProductInWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { useNavigate } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export function Products() {
  const { products } = useGlobalProvider();
  const { authStatus } = useAuthProvider();
  const { addToCart } = useAddinCart();
  const { AddWishlist } = useAddWishlist();
  const { isInWishlist } = useIsProductInWishlist();
  const navigate = useNavigate();

  const handleProduct = (id: string, category: string) => {
    navigate(`/OneProductPage/${category}/${id}`);
  };

  const hanldeBuy = (price: number) => {
    navigate(`/Buy/Checkout/${price}/${[1]}`);
  };

  return (
    <SProducts>
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-2">
        {products?.slice(0, 24).map((item: TProducts) => {
          return (
            <div
              key={item.id}
              className="h-full border-none shadow-xl p-3 bg-white rounded-lg w-auto"
            >
              <div
                className="cursor-pointer text-center lg:text-start w-auto"
                onClick={() => handleProduct(item.category_name, item.id)}
              >
                <h3 className="w-auto h-auto m-auto lg:m-0 lg:h-8 lg:w-80">
                  {item.title}
                </h3>
                <img
                  className="h-60 mt-2 md:h-40 lg:h-80 "
                  src={item.image}
                  alt="productImg"
                />
              </div>
              <h3 className="mt-2">Price: {item.price}$</h3>
              {authStatus === "authorized" ? (
                <div className="flex justify-between mt-2">
                  <Button
                    onClick={() => hanldeBuy(item.price)}
                    className="w-40 bg-amber-400"
                  >
                    Buy Now
                  </Button>
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
