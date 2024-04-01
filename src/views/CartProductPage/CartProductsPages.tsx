import { SCartProducts } from "./SCartProductsPage";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteCartProduct } from "@src/hooks/useAddAndGetCart/useDeleteCartProduct";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { FormattedMessage } from "react-intl";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function CartProductsPage() {
  const { CartTotalprice, cartProducts, ProductsCount } = useGlobalProvider();
  const navigate = useNavigate();
  const { deleteCartProduct } = useDeleteCartProduct();
  const { authStatus } = useAuthProvider();
  const { addToCart } = useAddinCart();

  const handleProducts = (category: string, id: string) => {
    navigate(`/OneProductPage/${id}/${category}`);
  };
  const hanldeBuy = () => {
    navigate(`/Buy/Checkout/${CartTotalprice}/${[ProductsCount]}`);
  };

  return (
    <SCartProducts>
      {ProductsCount === 0 ? (
        <div className="flex justify-center items-center">
          <img
            className="w-full"
            src="../Images/empty_cart_image/empty_cart_image.png"
            alt="empty_cart_img"
          />
          <div className="absolute">
            <h1>
              <FormattedMessage
                id="Your_Amazon_Cart_is_empty"
                defaultMessage={"Your Amazon Cart is empty"}
              />
            </h1>
            {authStatus === "unauthorized" ? (
              <div className=" mt-2 bg-slate-700 rounded-xl p-4 flex justify-between">
                <Button
                  onClick={() => navigate("/Login")}
                  className="bg-yellow-400 border-none"
                >
                  <FormattedMessage
                    id="Authorization"
                    defaultMessage={"Sign in to your account"}
                  />
                </Button>
                <Button
                  onClick={() => navigate("/Register")}
                  className="bg-yellow-400 border-none"
                >
                  <FormattedMessage
                    id="Registration"
                    defaultMessage={"Sign up now"}
                  />
                </Button>
              </div>
            ) : (
              <div className=" mt-2 bg-slate-700 rounded-full p-4 text-center">
                <Button
                  onClick={() => navigate("/")}
                  className="bg-yellow-400 border-none w-full"
                >
                  <FormattedMessage
                    id="Add_products_Here"
                    defaultMessage={"Add products Here"}
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="p-2 rounded-xl flex bg-gray-200 inline-flex m-4 ">
            <FormattedMessage
              id="The_number_of_products_in_the_Cart"
              defaultMessage={"The number of products in the Cart"}
            />
            <p className="ml-2 bg-slate-400 rounded-xl min-w-10 text-center">
              {ProductsCount}
            </p>
          </h1>
          <hr className="w-4/5 m-auto" />
          <div className="flex p-2 items-center h-2/5 relative">
            <div className="flex w-full m-3 flex-col gap-2">
              {cartProducts?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-slate-400 p-2 rounded-xl w-1/2 border-none"
                  >
                    <div className="flex justify-between items-center">
                      <div className="bg-grey-200 flex">
                        <div className="bg-white p-2 rounded-xl inline-flex">
                          <div
                            className="cursor-pointer"
                            onClick={() =>
                              handleProducts(
                                item.cartProduct.category_name,
                                item.cartProduct.id
                              )
                            }
                          >
                            <img
                              className="w-16"
                              src={item.cartProduct.image}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="ml-5">
                          <h4>{item.cartProduct.title}</h4>
                          {item.cartProduct.salePrice === null ? (
                            <h5 className="mt-4">{item.cartProduct.price} $</h5>
                          ) : (
                            <h5 className="mt-4">
                              {item.cartProduct.salePrice} $
                            </h5>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          <Button
                            onClick={() => addToCart(item.cartProduct.id)}
                            className=" w-12 h-7 rounded-full border-none"
                          >
                            +
                          </Button>
                          <p className="bg-slate-500 rounded-xl px-3">
                            {item.count}
                          </p>
                          <Button
                            onClick={() => deleteCartProduct(item.id, false)}
                            className=" w-12 h-7 rounded-full border-none"
                          >
                            -
                          </Button>
                        </div>
                        <button
                          onClick={() => deleteCartProduct(item.id, true)}
                          className="rounded-full h-16 w-16 border-none bg-slate-400"
                        >
                          {<MdDeleteForever className="w-10 h-10" />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-5 m-3 rounded-xl w-1/3 bg-slate-400 p-4 absolute sticky top-5 self-start">
              <div className="flex justify-between">
                <h3 className="text-gray-700">
                  <FormattedMessage
                    id="Total_Cost"
                    defaultMessage={"Total Cost"}
                  />
                </h3>
                <p>{CartTotalprice}$</p>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-700">
                  <FormattedMessage
                    id="Amount_to_be_paid"
                    defaultMessage={"Amount to be paid"}
                  />
                </h3>
                <p>{CartTotalprice}$</p>
              </div>
              <Button
                type="primary"
                className="flex items-center bg-yellow-400 border-none justify-center hover:bg-yellow-600"
                onClick={hanldeBuy}
              >
                <h3 className="text-gray-700">
                  <FormattedMessage
                    id="Go_to_Checkout"
                    defaultMessage={"Go to Checkout"}
                  />
                </h3>
              </Button>
            </div>
          </div>
        </div>
      )}
    </SCartProducts>
  );
}
