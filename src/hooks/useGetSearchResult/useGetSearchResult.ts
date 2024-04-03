import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export function useGetSearchResult() {
  const { products } = useGlobalProvider();
  const [categorySearch, setCategorySearch] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<TProducts[]>();

  function getCategorySearch() {
    const filteredCategoryProducts = products?.filter(
      (item) => item.category_name === categorySearch
    );
    const result = filteredCategoryProducts?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return result;
  }

  function SearchProducts() {
    const filteredProducts = products?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return filteredProducts;
  }
  useEffect(() => {
    if (categorySearch === "All") {
      const filteredProducts = SearchProducts();
      setSearchResult(filteredProducts);
    } else {
      const filteredCategorys = getCategorySearch();
      setSearchResult(filteredCategorys);
    }
  }, [search, categorySearch]);

  return { categorySearch,setSearchResult, setCategorySearch, search, setSearch, searchResult };
}
