import { useGetWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { MdDeleteForever } from "react-icons/md";
import { SLikedProducts } from "./SWishlist";
import { useDeleteWishlist } from "@src/hooks/useAddAndGetLikedProducts/useDeleteWishlist";
import { Button } from "antd";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { usewishTotalPrice } from "@src/hooks/useTotalPrice/wishlistTotalprice";

export function LikedProductsPage(): JSX.Element {
  const { wishlist } = useGetWishlist();
  const { DeleteWishlist } = useDeleteWishlist();
  const { authStatus } = useAuthPRovider();
  const { wishlistTotalprice } = usewishTotalPrice();
  const navigate = useNavigate();

  return (
    <SLikedProducts>
      {wishlist?.length === 0 || authStatus === "unauthorized" ? (
        <div className="flex justify-center items-center">
          <img
            className="w-full relative"
            src="../Images/empty_cart_image/empty_cart_image.png"
            alt="empty_cart_img"
          />
          <div className="absolute">
            <h1>Your Amazon Wishlist is empty</h1>
            <div className=" mt-2 bg-slate-700 rounded-full p-4 text-center">
              <Button
                onClick={() => navigate("/")}
                className="bg-yellow-400 border-none w-full"
              >
                Add Wishlist products Here
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex p-2 items-center">
          <div className="flex w-full flex-col gap-2">
            {wishlist?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center rounded-xl overflow-hidden p-2 w-2/3 bg-slate-400"
                >
                  <div className="bg-grey-200 flex">
                    <div className="bg-white p-2 rounded-xl inline-flex">
                      <img
                        className="w-16"
                        src={item.likedProduct.image}
                        alt="img"
                      />
                    </div>
                    <div className="ml-5">
                      <h4>{item.likedProduct.price}$</h4>
                      <p className="mt-5">
                        {item.likedProduct.description.slice(0, 120)}...
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => DeleteWishlist(item.id)}
                    className="rounded-full h-16 w-16 border-none flex justify-center items-center bg-slate-400 hover:bg-gray-800"
                  >
                    {<MdDeleteForever className="w-20 h-10" />}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5  rounded-xl w-1/3 bg-slate-400 p-2 ">
            <div className="flex justify-between">
              <h3 className="text-gray-700">სრული ღირებულება</h3>
              <p>{wishlistTotalprice}$</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-gray-700">გადასახდელი თანხა</h3>
              <p>{wishlistTotalprice}$</p>
            </div>
            <Button
              type="primary"
              className="flex items-center bg-yellow-400 border-none justify-center hover:bg-yellow-600"
            >
              <h3 className="text-gray-700">ყიდვა</h3>
            </Button>
          </div>
        </div>
      )}
    </SLikedProducts>
  );
}
