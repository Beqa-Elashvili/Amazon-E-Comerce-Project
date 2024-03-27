import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { Button, Rate } from "antd";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { FaCartArrowDown } from "react-icons/fa";
import { useAuthProvider } from "@src/providers/AuthProvider"; 
import { useNavigate } from "react-router-dom";
import { RiBookmark3Fill } from "react-icons/ri";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export function ProductsSlider({
  relativeProp,
  imgHeight,
  products,
  itemsSHow,
}: {
  relativeProp: "relative" | undefined;
  imgHeight: number;
  products: TProducts[];
  itemsSHow: number | undefined;
}) {
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { addToCart } = useAddinCart();
  const { authStatus } = useAuthProvider();

  const handleOnClick = (id: string) => {
    if (authStatus === "authorized") {
      addToCart(id);
    } else {
      navigate("/login");
    }
  };

  const handleProducts = (id: string) => {
    navigate(`/OneProductPage/${id}`);
  };

  return (
    <div className="text-center">
      <div
        style={{ position: relativeProp }}
        className="inline-flex bg-white rounded-lg justify-center"
      >
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            className:
              "border-none h-full opacity-0 rounded-r-lg  hover:opacity-20 absolute top-1/2 right-0 p-5 transform -translate-y-1/2  ",
            children: (
              <h1 className="p-2 bg-black text-white rounded-xl">{`>`}</h1>
            ),
          }}
          backwardBtnProps={{
            className:
              "border-none opacity-0 rounded-l-lg z-10 h-full hover:opacity-20 absolute top-1/2 left-0 p-5 transform -translate-y-1/2 ",
            children: (
              <h1 className="p-2  bg-black text-white rounded-xl  ">{`<`}</h1>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: itemsSHow,
              itemsToScroll: 1,
            },
          ]}
          speed={400}
          easing="linear"
          autoplay={true}
          autoplayDelay={2500}
        >
          {products?.map((item: TProducts) => {
            return (
              <div key={item.id} className="p-2 text-center relative">
                <div
                  className="cursor-pointer"
                  onClick={() => handleProducts(item.id)}
                >
                  {item.salePrice !== null && (
                    <div className="flex absolute">
                      <RiBookmark3Fill className="size-8 text-yellow-400" />
                    </div>
                  )}
                  <img
                    className="object-contain"
                    style={{ height: imgHeight }}
                    src={item.image}
                    alt="product_image"
                  />
                  <h4 className=" h-14 text-balance text-start text-blue-900">
                    {item.title}
                  </h4>
                </div>
                <div className="text-start">
                  <Rate className="pt-2" allowHalf defaultValue={2.5} />
                  <div className="mt-2 flex justify-between">
                    {item.salePrice !== null ? (
                      <div>
                        <h4 className="text-blue-900 object-cover flex mt-2">
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
                      className="px-2"
                      icon={<FaCartArrowDown />}
                      onClick={() => handleOnClick(item.id)}
                    >
                      ADD
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
