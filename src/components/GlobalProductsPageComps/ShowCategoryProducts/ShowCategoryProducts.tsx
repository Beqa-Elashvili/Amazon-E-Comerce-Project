import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Button, Rate } from "antd";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { FaCartArrowDown } from "react-icons/fa";
import { RiBookmark3Fill } from "react-icons/ri";

export function ShowCategoryProducts() {
  const { addtoCart } = useAddinCart();
  const { categoryProducts, CategoryName } = useGlobalProvider();

  return (
    <div className="p-2">
      {CategoryName ? <h1>{CategoryName}</h1> : undefined}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categoryProducts.map((item) => {
          return (
            <div key={item.id} className="p-2 text-center relative">
              {item.salePrice !== null && (
                <div className="flex absolute">
                  <RiBookmark3Fill className="size-8 text-yellow-400" />
                </div>
              )}
              <img
                className="object-cover h-60 w-full"
                src={item.image}
                alt="product_image"
              />
              <div className="text-start">
                <h4 className="flex w-48 text-blue-900">{item.title}</h4>
                <Rate className="mt-2" allowHalf defaultValue={2.5} />
                <div className="mt-2 flex justify-between">
                  {item.salePrice !== null ? (
                    <div>
                      <h4 className="text-blue-900 flex mt-2">
                        SalePrice:
                        <p className="ml-2 text-red-600">{item.salePrice} $</p>
                      </h4>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-blue-900 flex mt-2">
                        Price:
                        <p className="ml-2 text-red-600">{item.price} $</p>
                      </h4>
                    </div>
                  )}
                  <Button
                    className="p-1"
                    icon={<FaCartArrowDown />}
                    onClick={() => addtoCart(item.id)}
                  >
                    Add Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
