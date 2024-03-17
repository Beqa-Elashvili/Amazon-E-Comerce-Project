import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { useGetProducts } from "@src/hooks/useGetProducts";
import { Button, Rate } from "antd";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { FaCartArrowDown } from "react-icons/fa";
import { useAuthProvider } from "@src/providers/AuthProvider"; // Fixed typo here
import { useNavigate } from "react-router-dom";
import { RiBookmark3Fill } from "react-icons/ri";

export function ProductsSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { products } = useGetProducts();
  const navigate = useNavigate();
  const { addToCart } = useAddinCart();
  const { authStatus } = useAuthProvider();

  function handleOnClick(id: string) {
    if (authStatus === "authorized") {
      addToCart(id);
    } else {
      navigate("/login");
    }
  }

  return (
    <div className=" mt-56 text-center">
      <div className="relative inline-flex bg-white rounded-lg justify-center">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            className:
              "border-none h-full opacity-0  hover:opacity-20 absolute top-1/2 right-0 p-5 transform -translate-y-1/2  ",
            children: (
              <h1 className="p-2 bg-black text-white rounded-xl">{`>`}</h1>
            ),
          }}
          backwardBtnProps={{
            className:
              "border-none opacity-0 z-10 h-full hover:opacity-20 absolute top-1/2 left-0 p-5 transform -translate-y-1/2 ",
            children: (
              <h1 className="p-2  bg-black text-white rounded-xl  ">{`<`}</h1>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: 6,
              itemsToScroll: 1,
              minWidth: 600,
            },
          ]}
          speed={400}
          easing="linear"
          autoplay={true}
          autoplayDelay={2500}
        >
          {products?.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => console.log(item.id, "clicked")}
                className="p-2 cursor-pointer text-center relative"
              >
                {item.salePrice !== null && (
                  <div className="flex absolute">
                    <RiBookmark3Fill className="size-8 text-yellow-400" />
                  </div>
                )}
                <img
                  className="object-cover h-56"
                  src={item.image}
                  alt="product_image"
                />
                <div className="text-start">
                  <h4 className="flex w-48 text-blue-900 h-12">{item.title}</h4>
                  <Rate className="mt-2" allowHalf defaultValue={2.5} />
                  <div className="mt-2 flex justify-between">
                    {item.salePrice !== null ? (
                      <div>
                        <h4 className="text-blue-900 flex mt-2">
                          SalePrice:
                          <p className="ml-2 text-red-600">{item.salePrice}$</p>
                        </h4>
                      </div>
                    ) : (
                      <div>
                        <h4 className="text-blue-900 flex mt-2">
                          Price:
                          <p className="ml-2">{item.price}$</p>
                        </h4>
                      </div>
                    )}
                    <Button
                      className="p-1"
                      icon={<FaCartArrowDown />}
                      onClick={() => handleOnClick(item.id)} // Fixed typo here
                    >
                      Add Cart
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </ReactSimplyCarousel>
      </div>
    </div>
  );
}
