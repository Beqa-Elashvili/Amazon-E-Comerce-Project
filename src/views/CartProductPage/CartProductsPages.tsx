import { useGetCartProducts } from "@src/hooks/useAddtoCart/getCartProducts";
import { SCartProducts } from "./SCartProductsPage";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteCartProduct } from "@src/hooks/useDeleteCartProduct";
import { useCartCount } from "@src/hooks/useCartCount";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { useAddinCart } from "@src/hooks/useAddtoCart";

export function CartProductsPage() {
  const navigate = useNavigate();
  const { addProductsCount } = useCartCount();
  const { cartProducts } = useGetCartProducts();
  const { deleteCartProduct } = useDeleteCartProduct();
  const { authStatus } = useAuthPRovider();
  const { addtoCart } = useAddinCart();

  return (
    <SCartProducts>
      {addProductsCount === 0 ? (
        <div className="flex justify-center items-center">
          <img
            className="w-full relative"
            src="../Images/empty_cart_image/empty_cart_image.png"
            alt="empty_cart_img"
          />
          <div className="absolute">
            <h1>Your Amazon Cart is empty</h1>
            {authStatus === "unauthorized" ? (
              <div className=" mt-2 bg-slate-700 rounded-xl p-4 flex justify-between">
                <Button
                  onClick={() => navigate("/Login")}
                  className="bg-yellow-400 border-none"
                >
                  Sign in to your account
                </Button>
                <Button
                  onClick={() => navigate("/Register")}
                  className="bg-yellow-400 border-none"
                >
                  Sign up now
                </Button>
              </div>
            ) : (
              <div className=" mt-2 bg-slate-700 rounded-full p-4 text-center">
                <Button
                  onClick={() => navigate("/")}
                  className="bg-yellow-400 border-none w-full"
                >
                  Add products Here
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {cartProducts?.map((item) => {
            return (
              <Card
                key={item.id}
                className="bg-slate-400 p-2 m-3 rounded-xl w-1/2 border-none"
                title={`${item.cartProduct.title}... ${item.count} ცალი`}
                extra={
                  <>
                    <Button onClick={() => addtoCart(item.cartProduct.id)}>
                      +
                    </Button>
                    <Button onClick={() => deleteCartProduct(item.id, false)}>
                      -
                    </Button>
                  </>
                }
              >
                <div className="flex justify-between items-center">
                  <div className="bg-grey-200 flex">
                    <div className="bg-white p-2 rounded-xl inline-flex">
                      <img
                        className="w-16"
                        src={item.cartProduct.image}
                        alt="img"
                      />
                    </div>
                    <div className="ml-5">
                      <h4>{item.cartProduct.price}$</h4>
                      <p className="mt-5">{item.cartProduct.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteCartProduct(item.id, true)}
                    className="rounded-full h-16 w-16 border-none bg-slate-400"
                  >
                    {<MdDeleteForever className="w-10 h-10" />}
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </SCartProducts>
  );
}
