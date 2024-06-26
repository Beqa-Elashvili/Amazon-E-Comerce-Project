import { Carousel } from "antd";
import { BackStyle } from "./SBackGroundimages";

export function BackSlider() {
  return (
    <div className="relative z-0">
      <BackStyle className="slider">
        <Carousel autoplay>
          <img
            src="../Images/Background_img/images(1).jpg"
            alt="background_img"
          />

          <img
            src="../Images/Background_img/images(2).jpg"
            alt="background_img"
          />

          <img
            src="../Images/Background_img/images(3).jpg"
            alt="background_img"
          />

          <img
            src="../Images/Background_img/images(4).jpg"
            alt="background_img"
          />
          <img
            src="../Images/Background_img/images(5).jpeg"
            alt="background_img"
          />
          <img
            src="../Images/Background_img/images(6).jpg"
            alt="background_img"
          />
          <img
            src="../Images/Background_img/images(7).jpeg"
            alt="background_img"
          />
        </Carousel>
      </BackStyle>
    </div>
  );
}
