import { SCategoryShablons } from "./ScategoryShablons";
import { useNavigate } from "react-router-dom";

export function CategoryShablons() {
  const navigate = useNavigate();

  const handleCategory = (categoryName: string) => {
    navigate(`/Category_Products_Page/${categoryName}/Productname/${1}`);
  };
  return (
    <SCategoryShablons className="absolute top-80 left-10 right-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-2">
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
      <div className=" block lg:hidden grid grid-cols-1 md:grid-cols-2  gap-x-12 gap-y-2">
        <div className="relative">
          <img src="\Images\onFloImages\imageOne.jpg" alt="img" />
          <h2 onClick={() => handleCategory("სმარტფონები")}>Smartphones</h2>
        </div>
        <div className="relative">
          <img src="\Images\onFloImages\imageEleven.webp" alt="img" />
          <h2 onClick={() => handleCategory("ლეპტოპები")}>Laptops</h2>
        </div>
        <div className="relative">
          <img src="\Images\onFloImages\imageTwo.jpg" alt="img" />
          <h2 onClick={() => handleCategory("გეიმინგი")}>Gaming</h2>
        </div>
      </div>
    </SCategoryShablons>
  );
}
