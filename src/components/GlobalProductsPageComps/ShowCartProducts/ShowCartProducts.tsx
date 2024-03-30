import { useEffect, useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Button } from "antd";
import { useDeleteCartProduct } from "@src/hooks/useAddAndGetCart/useDeleteCartProduct";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export function ShowCartProcuts() {
  const navigate = useNavigate();
  const { cartProducts, CartTotalprice } = useGlobalProvider();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const { deleteCartProduct } = useDeleteCartProduct();


  useEffect(() => {
    if (cartProducts.length === 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [cartProducts]);

  const handleProducts = (id: string) => {
    navigate(`/OneProductPage/${id}`);
  };
  return (
    <div>
      {isEmpty && (
        <div className="flex flex-col border-solid h-full border-slate-400 border-y-0 border-r-0 border-l max-w-40">
          <div className=" p-2 flex flex-col items-center justify-center">
            <p className="text-gray-700 text-sm">Subtotal</p>
            <h3 className="text-red-600">${CartTotalprice}</h3>
            <p className="text-green-900 text-sm mt-2 text-center">
              Your order qualifies for FREE Shipping. Choose this option at
              checkout.
            </p>
            <Button
              onClick={() => navigate("/CartProducts")}
              className="mt-2 h-6 w-28 text-xs flex justify-center drop-shadow"
            >
              Go to Cart
            </Button>
          </div>
          <div className="bg-slate-400 h-px"></div>
          <div className="overflow-y-auto ">
            {cartProducts?.map((item: TProducts) => {
              return (
                <div className="text-center" key={item.id}>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleProducts(item.cartProduct.id)}
                  >
                    <img
                      className="w-32"
                      src={item.cartProduct.image}
                      alt="product_image"
                    />
                  </div>
                  <div className="flex justify-between p-2 items-center">
                    {item.cartProduct.salePrice !== null ? (
                      <div>
                        <h3 className="text-red-600">
                          ${item.cartProduct.salePrice}
                        </h3>
                      </div>
                    ) : (
                      <div>
                        <h3>${item.cartProduct.price}</h3>
                      </div>
                    )}
                    <p className="border-solid border rounded-xl h-full px-1 bg-yellow-400">
                      {item.count}
                    </p>
                    <button
                      onClick={() => deleteCartProduct(item.id, true)}
                      className="rounded-full border-none bg-white cursor-pointer"
                    >
                      {<MdDeleteForever className="w-8 h-8" />}
                    </button>
                  </div>
                  <div className="bg-slate-400 h-px"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
