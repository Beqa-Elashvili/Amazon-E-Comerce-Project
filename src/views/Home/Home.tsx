import { SHome } from "./Home.styled";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { CategoryShablons } from "@src/components/HomeComponents/Category_shablons";
import Products from "../ProductsPage";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { FcSalesPerformance } from "react-icons/fc";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";
import { useEffect, useState } from "react";
import { ImAppleinc } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { products, saleProducts } = useGlobalProvider();
  const [AppleProducts, setAppleProducts] = useState<TProducts[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const resp = products.filter((item: TProducts) => {
      const productsName = item.title.split(" ").slice(0, 1).join("");
      return productsName === "Apple";
    });
    const resp2 = products.filter((item: TProducts) => {
      const productsName = item.title.split(" ").slice(0, 1).join("");
      return productsName === "Samsung";
    });
    setAppleProducts(resp);
  }, [products]);

  const handleProducts = (category: string, id: string) => {
    navigate(`/OneProductPage/${id}/${category}`);
  };

  return (
    <SHome>
      <div className="flex flex-col gap-2">
        <div className="relative mb-auto lg:mb-0">
          <BackSlider />
          <CategoryShablons />
        </div>
        <div className="resp-height block lg:hidden"></div>
        <div className="flex items-center flex-col gap-14 justify-center">
          <div className="hidden lg:block w-[96%] mt-20 shadow-xl relative bg-white p-2 rounded-xl">
            <ProductsSlider
              relativeProp={undefined}
              imgHeight={225}
              imgwidth={220}
              itemsSHow={6}
              products={products}
            />
          </div>
          <div className="hidden lg:block shadow-xl relative bg-white p-2 bg-slate-700 rounded-xl">
            <div className="flex items-end gap-2">
              <h1 className="text-orange-600">Only Sale</h1>
              <FcSalesPerformance className="size-12" />
            </div>
            <ProductsSlider
              relativeProp={undefined}
              imgHeight={225}
              imgwidth={undefined}
              itemsSHow={6}
              products={saleProducts}
            />
          </div>
          <div className="hidden lg:block shadow-xl relative bg-white p-2 bg-slate-700 rounded-xl">
            <div className=" flex items-end gap-2">
              <h1 className="text-orange-600">Apple Products</h1>
              <ImAppleinc className="size-12 text-slate-300" />
            </div>
            <ProductsSlider
              relativeProp={undefined}
              imgHeight={225}
              imgwidth={undefined}
              itemsSHow={6}
              products={AppleProducts}
            />
          </div>
        </div>
        <div className="w-[96%] m-auto bg-white p-2 rounded text-center grid gap-x-20 gap-y-4 grid-cols-2 md:grid-cols-3 lg:hidden">
          {products.slice(0, 6).map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => handleProducts(item.category_name, item.id)}
                className="resp-Products border-solid border rounded border-slate-200 p-2 cursor-pointer"
              >
                <img
                  className="h-20 w-20 object-contain"
                  src={item.image}
                  alt="product_img"
                />
                <p>{item.title.split(" ").slice(0, 4).join(" ")}</p>
                {item.salePrice !== null ? (
                  <p className="text-lg text-red-600">${item.salePrice}</p>
                ) : (
                  <p className="text-lg">${item.price}</p>
                )}
              </div>
            );
          })}
        </div>
        <Products />
      </div>
    </SHome>
  );
}
