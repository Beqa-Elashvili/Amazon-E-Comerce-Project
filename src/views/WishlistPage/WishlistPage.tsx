import { MdDeleteForever } from "react-icons/md";
import { SLikedProducts } from "./SWishlist";
import { useDeleteWishlist } from "@src/hooks/useAddAndGetLikedProducts/useDeleteWishlist";
import { Button } from "antd";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { usewishTotalPrice } from "@src/hooks/useTotalPrice/wishlistTotalprice";
import { IoMdHeartDislike } from "react-icons/io";

export function LikedProductsPage(): JSX.Element {
  const { wishlist } = useGlobalProvider();
  const { DeleteWishlist } = useDeleteWishlist();
  const { authStatus } = useAuthProvider();
  const navigate = useNavigate();

  const handleProducts = (category: string, id: string) => {
    navigate(`/OneProductPage/${id}/${category}`);
  };

  return (
    <SLikedProducts>
      {wishlist?.length === 0 || authStatus === "unauthorized" ? (
        <div className="flex justify-center items-center">
          <img
            className="w-full h-full relative object-cover"
            src="../Images/empty_cart_image/empty_cart_image.png"
            alt="empty_cart_img"
          />
          <div className="absolute p-5">
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
        <div className="grid gap-y-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist?.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-1/2 m-auto flex flex-col items-center rounded-xl overflow-hidden p-2 border-solid border border-orange-400"
              >
                <div className="bg-grey-200 flex flex-col">
                  <div
                    onClick={() =>
                      handleProducts(
                        item.likedProduct.category_name,
                        item.likedProduct.id
                      )
                    }
                    className="bg-white p-2 rounded-xl"
                  >
                    <img
                      className="w-16 h-16"
                      src={item.likedProduct.image}
                      alt="img"
                    />
                  </div>
                  <div className="ml-5">
                    <h4>{item.likedProduct.price}$</h4>
                  </div>
                </div>
                <button
                  onClick={() => DeleteWishlist(item.id)}
                  className="rounded-full h-16 w-16 border-none flex justify-center items-center bg-slate-400 hover:bg-gray-800"
                >
                  {<IoMdHeartDislike className="text-red-600 w-12 h-8" />}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </SLikedProducts>
  );
}
