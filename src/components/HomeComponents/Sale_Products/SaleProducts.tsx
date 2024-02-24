import { Button } from "antd";
import { SSaleProducts } from "./SSaleProducts";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { useGetSaleProducts } from "@src/hooks/useGetSaleProducts";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { useIsProductInWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { useAddWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";


export function SaleProducts() {
  const { authStatus } = useAuthPRovider();
  const { addtoCart } = useAddinCart();
  const { saleProducts } = useGetSaleProducts();
  const { isInWishlist } = useIsProductInWishlist();
  const { AddWishlist } = useAddWishlist();

  return (
    <SSaleProducts className="absolute">
      <div className="container">
        {saleProducts?.map((item) => {
          return (
            <div
              key={item.id}
              className="h-full border-none cursor-pointer text-start p-3 bg-white rounded-lg"
            >
              <div className="text-red-800 bg-red-100 inline p-2 rounded-lg">
                Hot Sale
              </div>
              <h3 className="mt-2 h-12">{item.title}</h3>
              <img className="h-80" src={item.image} alt="SaleProducts" />
              <p className="line-through text-red-700">
                OldPrice: {item.price}
              </p>
              <h3>Price:{item.salePrice}$</h3>
              {authStatus === "authorized" ? (
                <div className="flex justify-between mt-2">
                  <Button className="w-40  bg-amber-400">Buy Now</Button>
                  <Button
                    onClick={() => addtoCart(item.id)}
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
