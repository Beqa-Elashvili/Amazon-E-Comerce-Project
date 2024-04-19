import { SSaleProducts } from "./SSaleProducts";
import { useNavigate } from "react-router-dom";

export function SaleProducts() {
  const navigate = useNavigate();

  const handleProducts = (categoryName: string) => {
    navigate(`/Category_Products_Page/${categoryName}/:Productname/${1}`);
  };
  return (
    <SSaleProducts className="absolute">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-12">
        <img
          onClick={() => handleProducts("TV | მონიტორები")}
          className="w-80 cursor-pointer border-solid rounded-lg border-white"
          src="\Images\onFloImages\imageSix.jpg"
          alt="img"
        />
        <img
          onClick={() => handleProducts("ტაბები")}
          className="w-80  cursor-pointer border-solid rounded-lg border-white"
          src="\Images\onFloImages\imageThree.webp"
          alt="img"
        />
        <img
          onClick={() => handleProducts("ფოტო | ვიდეო")}
          className="w-80 cursor-pointer border-solid rounded-lg border-white"
          src="\Images\onFloImages\ImageFour.webp"
          alt="img"
        />
        <img
          onClick={() => handleProducts("აუდიო")}
          className="w-80 cursor-pointer border-solid rounded-lg border-white"
          src="\Images\onFloImages\imageFive.jpg"
          alt="img"
        />
      </div>
    </SSaleProducts>
  );
}
