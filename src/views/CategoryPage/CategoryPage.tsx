import { CategoryMenu } from "@src/components/CategoryMenu";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Rate } from "antd";

export function CategoryPage() {
  const { categoryProducts, CategoryName } = useGlobalProvider();

  return (
    <div>
      <div className="ml-2">
        <h1>products</h1>
        <p className="text-gray-800">
          Our most popular products based on sales. Updated frequently.
        </p>
      </div>
      <hr className="w-4/5 m-auto mt-2" />
      <div className="flex">
        <CategoryMenu />
        <div className="p-2">
          {CategoryName ? <h1>{CategoryName}</h1> : <div></div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryProducts.map((item) => {
              return (
                <div key={item.id} className="p-2 text-center">
                  <img className="size-60" src={item.image} alt="" />
                  <div className="text-start">
                    <h4 className="flex w-48 text-blue-900">{item.title}</h4>
                    <Rate className="mt-2" allowHalf defaultValue={2.5} />
                    <h4 className="text-blue-900 flex mt-2">
                      Price:
                      <p className="ml-2 text-red-600">{item.price} $</p>
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
