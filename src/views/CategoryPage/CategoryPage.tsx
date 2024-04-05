import { CategoryMenu } from "@src/components/CategoryMenu";
import { ShowCartProcuts } from "@src/components/GlobalProductsPageComps/ShowCartProducts";
import { ShowCategoryProducts } from "@src/components/GlobalProductsPageComps/ShowCategoryProducts";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";
import { Skeleton } from "antd";
export function CategoryPage() {
  const { categoryProducts, loading,productsSlider } = useGlobalProvider();


  return (
    <div className="w-full">
      {loading ? (
        <Skeleton
          avatar={true}
          paragraph={{ rows: 10, width: ["100%", "75%", "60%"] }}
          loading={true}
          active
        />
      ) : (
        <div>
          <div className="flex">
            <div>
              <div className="ml-2">
                <h1>products</h1>
                <p className="text-gray-800">
                  Our most popular products based on sales. Updated frequently.
                </p>
                <hr className="w-4/5 m-auto mt-2" />
              </div>
              <div className="flex relative">
                <div className="absolute left-0 z-20">
                  <CategoryMenu />
                </div>
                <div className="ml-20">
                  <ShowCategoryProducts />
                </div>
              </div>
            </div>
            <ShowCartProcuts />
          </div>
          <div className=" w-[98%] my-10 m-auto relative shadow-xl shadow-inner p-2 bg-slate-20 rounded-xl">
            <ProductsSlider
              relativeProp={undefined}
              imgHeight={210}
              itemsSHow={6}
              products={productsSlider}
            />
          </div>
        </div>
      )}
    </div>
  );
}
