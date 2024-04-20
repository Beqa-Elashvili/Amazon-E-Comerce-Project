import { SSaleProducts } from "./SSaleProducts";
import { useNavigate } from "react-router-dom";

export function CategoryShablons() {
  const navigate = useNavigate();

  const handleCategory = (categoryName: string) => {
    navigate(`/Category_Products_Page/${categoryName}/Productname/${1}`);
  };
  return (
    <SSaleProducts className="absolute">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-2">
        <div className="relative">
          <img src="\Images\onFloImages\imageSix.jpg" alt="img" />
          <h2 onClick={() => handleCategory("TV | მონიტორები")}>
            TV | Monitores
          </h2>
        </div>
        <div className="relative">
          <img src="\Images\onFloImages\imageThree.webp" alt="img" />
          <h2 onClick={() => handleCategory("ტაბები")}>Tabs</h2>
        </div>
        <div className="relative">
          <img src="\Images\onFloImages\ImageFour.webp" alt="img" />
          <h2 onClick={() => handleCategory("ფოტო | ვიდეო")}>Photo | Video</h2>
        </div>
        <div className="relative">
          <img src="\Images\onFloImages\imageFive.jpg" alt="img" />
          <h2 onClick={() => handleCategory("აუდიო")}>Audio</h2>
        </div>
      </div>
    </SSaleProducts>
  );
}
