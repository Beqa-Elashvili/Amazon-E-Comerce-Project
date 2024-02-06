import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { SProducts } from "./SProducts";

export function Products() {
  const { products } = useGlobalProvider();
  return (
    <SProducts className="mt-40">
      <div className="container">
        {products?.map((item) => {
          return (
            <button
              key={item.id}
              className="h-full border-none cursor-pointer text-start p-3 bg-cyan-50"
            >
              <h3>{item.title}</h3>
              <img className="h-80" src={item.image} alt="SaleProducts" />
              <h3>Price: {item.price}$</h3>
            </button>
          );
        })}
      </div>
    </SProducts>
  );
}
