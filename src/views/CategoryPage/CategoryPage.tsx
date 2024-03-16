import { CategoryMenu } from "@src/components/CategoryMenu";
import { ShowCartProcuts } from "@src/components/GlobalProductsPageComps/ShowCartProducts";
import { ShowCategoryProducts } from "@src/components/GlobalProductsPageComps/ShowCategoryProducts";

export function CategoryPage() {
  return (
    <div className="flex">
      <div>
        <div className="ml-2">
          <h1>products</h1>
          <p className="text-gray-800">
            Our most popular products based on sales. Updated frequently.
          </p>
          <hr className="w-4/5 m-auto mt-2" />
        </div>
        <div className="flex">
          <CategoryMenu />
          <ShowCategoryProducts />
        </div>
      </div>
      <ShowCartProcuts />
    </div>
  );
}
