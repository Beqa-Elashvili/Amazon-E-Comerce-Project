import { useGetWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { MdDeleteForever } from "react-icons/md";
import { SLikedProducts } from "./SWishlist";
import { useDeleteWishlist } from "@src/hooks/useAddAndGetLikedProducts/useDeleteWishlist";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function LikedProductsPage(): JSX.Element {
  const { wishlist } = useGetWishlist();
  const { DeleteWishlist } = useDeleteWishlist();
  const navigate = useNavigate();

  return (
    <SLikedProducts>
      {wishlist?.length === 0 ? (
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
        <div className="p-2 flex flex-col gap-2">
          {wishlist?.map((item) => {
            return (
              <div className="flex justify-between items-center rounded-xl w-1/2 bg-slate-400">
                <div className="bg-grey-200 flex p-2">
                  <div className="bg-white p-2 rounded-xl inline-flex">
                    <img
                      className="w-16"
                      src={item.likedProduct.image}
                      alt="img"
                    />
                  </div>
                  <div className="ml-5">
                    <h4>{item.likedProduct.price}$</h4>
                    <p className="mt-5">{item.likedProduct.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => DeleteWishlist(item.id)}
                  className="rounded-full h-16 w-16 border-none bg-slate-400"
                >
                  {<MdDeleteForever className="w-10 h-10" />}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </SLikedProducts>
  );
}
