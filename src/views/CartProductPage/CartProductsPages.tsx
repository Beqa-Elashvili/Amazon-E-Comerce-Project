import { useGetCartProducts } from "@src/hooks/useAddtoCart/getCartProducts";
import { SCartProducts } from "./SCartProductsPage";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteCartProduct } from "@src/hooks/useDeleteCartProduct";
import { Button } from "antd";
import { useCartCount } from "@src/hooks/useCartCount";

export function CartProductsPage() {
  const { cartProducts } = useGetCartProducts();
  const { deleteCartProduct } = useDeleteCartProduct();
  const { addProductsCount } = useCartCount();

  return (
    <SCartProducts>
      {addProductsCount === 0 ? (
        <div className="flex justify-center items-center">
          <img
            className="w-full"
            src="../Images/empty_cart_image/empty_cart_image.png"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-col">
          {cartProducts?.map((item) => {
            return (
              <div className="flex justify-between items-center bg-slate-400 p-2 m-3 rounded-xl w-1/2">
                <div className="bg-grey-200 flex">
                  <div className="bg-white p-2 rounded-xl inline-flex">
                    <img className="w-16" src={item.cartProduct.image} alt="" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-gray-800">{item.cartProduct.title}</h4>
                    <h4 className="mt-10">{item.cartProduct.price}$</h4>
                  </div>
                </div>
                <Button
                  onClick={() => deleteCartProduct(item.id)}
                  className="rounded-xl h-16 border-none bg-slate-400"
                >
                  {<MdDeleteForever className="w-10 h-10" />}
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </SCartProducts>
  );
}
