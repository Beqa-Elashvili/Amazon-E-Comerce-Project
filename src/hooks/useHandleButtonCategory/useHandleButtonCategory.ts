import { useNavigate } from "react-router-dom";

export const useHandleButtonCategory = () => {
  const navigate = useNavigate();

  const handleButtonCategory = (
    categoryName: string,
    productName: string,
    page: number
  ) => {
    let Tranlatecategory = categoryName;
    {
      switch (categoryName) {
        case "Audio":
          Tranlatecategory = "აუდიო";
          break;
        case "Photo | Video":
          Tranlatecategory = "ფოტო | ვიდეო";
          break;
        case "Gaming":
          Tranlatecategory = "გეიმინგი";
          break;
        case "TV | Monitors":
          Tranlatecategory = "TV | მონიტორები";
          break;
        case "Tables":
          Tranlatecategory = "ტაბები";
          break;
        case "Laptops":
          Tranlatecategory = "ლეპტოპები";
          break;
        case "Smartphones":
          Tranlatecategory = "სმარტფონები";
          break;
        case "Tools":
          Tranlatecategory = "ხელსაწყოები";
          break;
      }
    }
    navigate(
      `/Category_Products_Page/${Tranlatecategory}/${productName}/${page}`
    );
  };
  return { handleButtonCategory };
};
