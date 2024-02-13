import { useGetCartProducts } from "@src/hooks/useAddtoCart/getCartProducts";
import { SCartProducts } from "./SCartProductsPage";
import { MdDeleteForever } from "react-icons/md";

export function CartProductsPage() {
  const { cartProducts } = useGetCartProducts();

  return (
    <SCartProducts>
      <div className="flex flex-col gap-1">
        {cartProducts?.map((item) => {
          return (
            <div className="flex justify-between items-center bg-slate-400 p-2 mt-2 ml-2 rounded-xl w-1/2">
              <div className="bg-grey-200 flex">
                <div className="bg-white p-2 rounded-xl inline-flex">
                  <img className="w-16" src={item.cartProduct.image} alt="" />
                </div>
                <div className="ml-5">
                  <h4 className="text-gray-800">{item.cartProduct.title}</h4>
                  <h4 className="mt-10">{item.cartProduct.price}$</h4>
                </div>
              </div>
              <button className="w-12 h-12 rounded-xl border-none bg-slate-400">
                {<MdDeleteForever className="w-10 h-10" />}
              </button>
            </div>
          );
        })}
      </div>
    </SCartProducts>
  );
}
