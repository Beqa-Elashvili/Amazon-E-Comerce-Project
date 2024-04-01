import { Button } from "antd";
import { SSaleProducts } from "./SSaleProducts";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { useIsProductInWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { useAddWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { RiBookmark3Fill } from "react-icons/ri";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function SaleProducts() {
  const { authStatus } = useAuthProvider();
  const { addToCart } = useAddinCart();
  const { saleProducts } = useGlobalProvider();
  const { isInWishlist } = useIsProductInWishlist();
  const { AddWishlist } = useAddWishlist();
  const navigate = useNavigate();

  const handleProducts = (category: string, id: string) => {
    navigate(`/OneProductPage/${id}/${category}`);
  };
  return (
    <SSaleProducts className="absolute">
      <div className="container">
        {saleProducts?.map((item: TProducts) => {
          return (
            <div
              key={item.id}
              className="border-none text-center p-2 bg-white rounded-lg"
            >
              <div
                className="cursor-pointer"
                onClick={() => handleProducts(item.category_name, item.id)}
              >
                <div className="flex absolute top-0">
                  <RiBookmark3Fill className="size-12 text-yellow-400" />
                </div>

                <h3 className="mt-10 h-10 text-blue-900">{item.title}</h3>
                <img
                  className="xl:h-80 lg:h-40 md:h-20"
                  src={item.image}
                  alt="SaleProducts"
                />
              </div>
              <div className="text-start">
                <p className="line-through text-red-700">
                  OldPrice: {item.price}
                </p>
                <h3>Price:{item.salePrice}$</h3>
              </div>
              {authStatus === "authorized" ? (
                <div className="flex justify-between mt-2">
                  <Button className="w-40  bg-amber-400">Buy Now</Button>
                  <Button
                    onClick={() => addToCart(item.id)}
                    icon={<FaCartArrowDown />}
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
    </SSaleProducts>
  );
}
