import { SglobalProducts } from "./SglobalProducts";
import { CategoryMenu } from "@src/components/CategoryMenu";

export function CategoryPage() {
  return (
    <SglobalProducts>
      <div className="ml-2">
        <h1>products</h1>
        <p className="text-gray-800">
          Our most popular products based on sales. Updated frequently.
        </p>
      </div>
      <hr className="w-4/5 m-auto mt-2" />
      <div className="flex">
        <CategoryMenu />
        <div className="mt-8 p-2">ggggds</div>
      </div>
    </SglobalProducts>
  );
}
