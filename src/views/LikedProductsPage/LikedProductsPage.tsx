import { useGetLikedProducts } from "@src/hooks/useAddAndGetLikedProducts";

export function LikedProductsPage(): JSX.Element {
  const { likedProducts } = useGetLikedProducts();
  return <div>this is Liked products page</div>;
}
