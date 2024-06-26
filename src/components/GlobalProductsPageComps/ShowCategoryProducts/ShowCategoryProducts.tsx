import { Button, Rate, Pagination, Divider } from "antd";
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
import { FormattedMessage } from "react-intl";
import { LocaleContext } from "@src/providers/LocaleProvaider/LocaleContext";
import { useContext } from "react";
export function ShowCategoryProducts() {
  const { locale } = useContext(LocaleContext);

  const { categoryName, productName } = useParams();
  const navigate = useNavigate();
  const { AddWishlist } = useAddWishlist();
  const { addToCart } = useAddinCart();
  const { authStatus } = useAuthProvider();
  const { isInWishlist } = useIsProductInWishlist();
  const { categoryProducts, dataTotal, pageSize } = UseGetCategoryProducts();

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

  const { page: pagNum } = useParams();
  const page = Number(pagNum);

  const handlePagination = (pages: number) => {
    navigate(`/Category_Products_Page/${categoryName}/${productName}/${pages}`);
  };

  const LocaleCategory = () => {
    let Tranlatecategory = "";
    switch (categoryName) {
      case "აუდიო":
        Tranlatecategory = "Audio";
        break;
      case "ფოტო | ვიდეო":
        Tranlatecategory = "Photo | Video";
        break;
      case "გეიმინგი":
        Tranlatecategory = "Gaming";
        break;
      case "TV | მონიტორები":
        Tranlatecategory = "TV | Monitors";
        break;
      case "ტაბები":
        Tranlatecategory = "Tables";
        break;
      case "ლეპტოპები":
        Tranlatecategory = "Laptops";
        break;
      case "სმარტფონები":
        Tranlatecategory = "Smartphones";
        break;
    }
    return Tranlatecategory;
  };

  return (
    <div className="p-2">
      {locale !== "ka" ? <h1>{LocaleCategory()}</h1> : <h1>{categoryName}</h1>}
      {categoryProducts.length === 0 ? (
        <div className="w-5/6">
          <img
            className="w-full h-auto"
            src="/Images/empty_cart_image/empty_cart_image.png"
            alt="EmptyErrey"
          />
        </div>
      ) : (
        <>
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
                      className="object-contain xl:h-60 md:h-40 w-full"
                      src={item.image}
                      alt="product_image"
                    />
                    <h4 className="h-20 flex text-start w-48 text-blue-900">
                      {item.title.slice(0, 90)}...
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
                            <FormattedMessage
                              id="Sale"
                              defaultMessage={"Sale Price"}
                            />
                            <p className="ml-2 text-red-600">
                              {item.salePrice}$
                            </p>
                          </h4>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-blue-900 flex mt-2">
                            <FormattedMessage
                              id="Price"
                              defaultMessage={"Price"}
                            />
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
        </>
      )}
      <Pagination
        className="text-center my-4"
        current={page}
        pageSize={pageSize}
        onChange={handlePagination}
        total={dataTotal}
      />
    </div>
  );
}
