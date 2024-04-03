import { Button, Rate, Skeleton } from "antd";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { FaCartArrowDown } from "react-icons/fa";
import { RiBookmark3Fill } from "react-icons/ri";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useAddWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { useIsProductInWishlist } from "@src/hooks/useAddAndGetLikedProducts";
import { useParams } from "react-router-dom";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";
import { UseGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";
export function ShowCategoryProducts() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { AddWishlist } = useAddWishlist();
  const { addToCart } = useAddinCart();
  const { authStatus } = useAuthProvider();
  const { isInWishlist } = useIsProductInWishlist();
  const { categoryProducts, loading } = UseGetCategoryProducts();

  const hanldeOnClick = (id: string) => {
    if (authStatus === "authorized") {
      addToCart(id);
    } else {
      navigate("/login");
    }
  };

  const handleProducts = (id: string, category: string) => {
    navigate(`/OneProductPage/${category}/${id}`);
  };

  return (
    <div className="p-2">
      <h1>{categoryName}</h1>
      <div>
        {loading ? (
          <Skeleton
            avatar={true}
            paragraph={{ rows: 10, width: ["100%", "75%", "60%"] }}
            loading={true}
            active
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-2">
            {categoryProducts.map((item: TProducts) => {
              return (
                <div key={item.id} className="p-2 text-center relative">
                  {item.salePrice !== null && (
                    <div className="flex absolute">
                      <RiBookmark3Fill className="size-8 text-yellow-400" />
                    </div>
                  )}
                  <div
                    className="cursor-pointer"
                    onClick={() => handleProducts(item.category_name, item.id)}
                  >
                    <img
                      className="object-cover xl:h-60 md:h-40 w-full"
                      src={item.image}
                      alt="product_image"
                    />
                    <h4 className="flex text-start w-48 text-blue-900">
                      {item.title}
                    </h4>
                  </div>
                  <div className="text-start">
                    {authStatus === "authorized" && (
                      <div className="flex justify-between items-center">
                        <Rate className="mt-2" allowHalf defaultValue={2.5} />
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
                    )}

                    <div className="mt-2 flex justify-between">
                      {item.salePrice !== null ? (
                        <div>
                          <h4 className="text-blue-900 flex mt-2">
                            SalePrice:
                            <p className="ml-2 text-red-600">
                              {item.salePrice}$
                            </p>
                          </h4>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-blue-900 flex mt-2">
                            Price:
                            <p className="ml-2">{item.price}$</p>
                          </h4>
                        </div>
                      )}
                      <Button
                        className="px-2"
                        icon={<FaCartArrowDown />}
                        onClick={() => hanldeOnClick(item.id)}
                      >
                        ADD
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <div className=" relative shadow-xl p-2 bg-slate-20 rounded-xl">
        <ProductsSlider
          relativeProp={undefined}
          imgHeight={210}
          itemsSHow={5}
          products={categoryProducts}
        />
      </div> */}
    </div>
  );
}
