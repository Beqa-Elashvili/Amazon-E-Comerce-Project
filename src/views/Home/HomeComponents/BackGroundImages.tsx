import { Carousel } from "antd";
import { BackStyle } from "./SBackGroundimages";

export function BackSlider() {
  return (
    <div>
      <BackStyle className="slider">
        <Carousel autoplay>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(2).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(1).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(2).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(3).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(4).jpg"
              alt=""
            />
          </div>
        </Carousel>
      </BackStyle>
      <div>33tfgdfg</div>
    </div>
  );
}
