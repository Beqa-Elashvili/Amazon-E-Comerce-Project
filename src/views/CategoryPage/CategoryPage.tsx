import { CategoryMenu } from "@src/components/CategoryMenu";
import { ShowCartProcuts } from "@src/components/GlobalProductsPageComps/ShowCartProducts";
import { ShowCategoryProducts } from "@src/components/GlobalProductsPageComps/ShowCategoryProducts";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";
import { Skeleton } from "antd";
import { UseGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";
import { ScategoryPage } from "./Scategorypage";
import { FormattedMessage } from "react-intl";
export function CategoryPage() {
  const { productsSlider } = useGlobalProvider();
  const { loading } = UseGetCategoryProducts();

  return (
    <div className="w-full">
      {loading ? (
        <>
          <Skeleton
            avatar={true}
            className="p-2"
            paragraph={{ rows: 3, width: ["100%", "100%", "100%"] }}
            loading={true}
            active
          />
          <div className="w-5/6 m-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-2">
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
            <Skeleton.Image active />
          </div>
        </>
      ) : (
        <div>
          <div className="flex justify-between">
            <div>
              <div className="ml-2">
                <h1 className="text-orange-700">
                  <FormattedMessage
                    id="Products"
                    defaultMessage={"Products"}
                  />
                </h1>
                <p className="text-orange-400">
                  Our most popular products based on sales. Updated frequently.
                </p>
                <hr className="w-4/5 m-auto mt-2" />
              </div>
              <div className="flex relative min-h-[380px]">
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
          <div className=" w-[98%] my-10 m-auto relative shadow-xl shadow-inner p-2  rounded-xl">
            <ProductsSlider
              relativeProp={undefined}
              imgHeight={210}
              imgwidth={220}
              itemsSHow={6}
              products={productsSlider}
            />
          </div>
        </div>
      )}
    </div>
  );
}
