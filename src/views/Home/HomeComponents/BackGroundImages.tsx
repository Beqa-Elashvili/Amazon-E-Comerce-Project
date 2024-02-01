import { Carousel } from "antd";
import { BackStyle } from "./SBackGroundimages";

export function BackSlider() {
  return (
    <div>
      <BackStyle className="slider">
        <Carousel autoplay>
          <img
            className="carousel"
            src="../Images/Background_img/images(1).jpg"
            alt="background_img"
          />
          <img
            className="carousel"
            src="../Images/Background_img/images(2).jpg"
            alt="background_img"
          />

          <img
            className="carousel"
            src="../Images/Background_img/images(3).jpg"
            alt="background_img"
          />

          <img
            className="carousel"
            src="../Images/Background_img/images(4).jpeg"
            alt="background_img"
          />

          <img
            className="carousel"
            src="../Images/Background_img/images(5).jpeg"
            alt="background_img"
          />
          <img
            className="carousel"
            src="../Images/Background_img/images(6).jpg"
            alt="background_img"
          />
          <img
            className="carousel"
            src="../Images/Background_img/images(7).jpeg"
            alt="background_img"
          />
        </Carousel>
      </BackStyle>
    </div>
  );
}
