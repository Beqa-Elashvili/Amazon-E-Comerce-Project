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
              src="../Images/Background_img/images(1).jpg"
              alt="background_img"
            />
            <h1 className="Title_one text-slate-100">
              Find technology
              <p>that makes your life easier</p>
            </h1>
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(2).jpg"
              alt="background_img"
            />
            <h1 className="Title_two text-slate-100">
              All the clothes you want <p className="mt-10">All brands in one platform</p>
            </h1>
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(3).jpg"
              alt="background_img"
            />
            <h1 className="Title_three">
              Every outfit needs to look good <p>Perfume adorns every woman</p>
            </h1>
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(4).jpg"
              alt="background_img"
            />
            <h1 className="Title_four">
              Technology will become your <p> best friend, discover them</p>
            </h1>
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(5).webp"
              alt="background_img"
            />
            <h1 className="Title_five">
              Find items for your personality,<p>Amazon's collection</p>
            </h1>
          </div>
          <div>
            <img
              className="carousel"
              src="../Images/Background_img/images(6).jpg"
              alt="background_img"
            />
            <h1 className="Title_six">
              Here you will find everything you want. <p>Discount every week</p>
            </h1>
          </div>
        </Carousel>
      </BackStyle>
    </div>
  );
}
