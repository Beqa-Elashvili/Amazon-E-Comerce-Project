import { useGetOneProduct } from "@src/hooks/useGetOneProduct";
import { SProductPage } from "./SProductPage";
import { useEffect, useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Checkbox, Rate, CheckboxProps, Popover, Button } from "antd";
import { useAddinCart } from "@src/hooks/useAddAndGetCart";
import { ShowCartProcuts } from "@src/components/GlobalProductsPageComps/ShowCartProducts";
import { LocationDeliverModal } from "@src/components/LocationDeliverModal";
import { FaCartArrowDown } from "react-icons/fa6";
import { useGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Item from "antd/es/list/Item";

export function OneProductPage() {
  const { product } = useGetOneProduct();
  const { authStatus } = useAuthProvider();
  const [open, setOpen] = useState<boolean>(false);
  const [opentwo, setOpenTwo] = useState<boolean>(false);
  const { addToCart } = useAddinCart();
  const { setOpenLocationModal, zipCode, location, categoryProducts } =
    useGlobalProvider();
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const { getCategoryProducts } = useGetCategoryProducts();
  const navigate = useNavigate();

  const Brand = product?.title.split(" ")[0];

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const calculatePercentageOff = () => {
    if (product?.salePrice !== null) {
      if (product) {
        const percentageOff =
          ((product.price - product.salePrice) / product.price) * 100;
        return percentageOff.toFixed(2);
      } else {
        return 0;
      }
    }
  };
  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const newRandomNumber = getRandomNumber(50, 400);
    setRandomNumber(newRandomNumber);
    if (product) {
      localStorage.setItem("productCategory", product?.category_name);
      getCategoryProducts(product?.category_name);
    } else {
      const category = localStorage.getItem("productCategory");
      if (category) {
        getCategoryProducts(category);
      }
    }
  }, [product]);

  const content = (
    <div>
      <p className="w-60 text-base">
        Free returns are available for the shipping address you chose. You can
        return the item for any reason in new and unused condition: no shipping
        charges
      </p>
    </div>
  );
  const contentTwo = (
    <div className="max-w-96">
      <h3>
        Eligible for Return, Refund or Replacement within 30 days of receipt
      </h3>
      <p className="mt-2 text-base">
        This item can be returned in its original condition for a full refund or
        replacement within 30 days of receipt. Read full return policy
      </p>
    </div>
  );

  const handleAddtoCart = (id: string) => {
    if (authStatus === "unauthorized") {
      navigate("/Login");
    } else {
      addToCart(id);
    }
  };

  return (
    <SProductPage>
      <div className="flex">
        <div className="flex flex-col gap-4 p-2">
          <div className="container">
            <img
              className="size-auto object-contain "
              src={product?.image}
              alt="product_img"
            />
            <div className="box">
              <h1 className="text-blue-900 mt-16">{product?.title}</h1>
              <h3 className="text-balance">{product?.description}</h3>
              <p className=" mt- text-blue-900 ">Brand: {Brand}</p>
              <Rate defaultValue={2.5} />
              <div className="flex gap-2">
                <p className="text-blue-900">{randomNumber}+ Bought</p>
                <p className="little">in past month</p>
              </div>
              <hr />
              {product?.salePrice !== null ? (
                <div>
                  <div className="flex gap-2 items-center">
                    <p className="text-lg sale">-{calculatePercentageOff()}%</p>
                    <p className="text-3xl text-black">${product?.salePrice}</p>
                  </div>
                  <p className="text-gray-600 line-through">
                    List Price: ${product?.price}
                  </p>
                </div>
              ) : (
                <p className="text-xl">
                  Price: <span className="text-3xl">${product?.price}</span>
                </p>
              )}
            </div>
            <div className="box mt-16">
              <div className="flex items-start bg-blue-200 relative p-2 rounded ">
                <Checkbox onChange={onChange}></Checkbox>
                <div className="flex ml-2">
                  <p>
                    Add your free 30-day trial of Prime and get fast, free
                    delivery
                  </p>
                  <img
                    className="h-8"
                    src="/Images/new_prime_logo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="border-solid flex flex-col gap-2 border-slate-300 border rounded p-2">
                {product?.salePrice !== null ? (
                  <p className="text-3xl">${product?.salePrice}</p>
                ) : (
                  <p className="text-3xl">${product.price}</p>
                )}
                <Popover
                  placement="bottom"
                  title="Return this item for free"
                  content={content}
                  trigger="click"
                  open={open}
                  onOpenChange={() => setOpen(!open)}
                >
                  <div className="flex items-center w-28 h-3 text-blue-800  hover:text-orange-600">
                    <a className="cursor-pointer">Free Explore</a>
                    <p className="mb-3 ml-1">&#x2304;</p>
                  </div>
                </Popover>
                <div className="mt-2">
                  <div>
                    <p className="text-blue-800 no-underline flex">
                      Free Delivery Thursday, March 28 on orders shipped by
                      Amazon over $35
                    </p>
                    <p className="mt-2">
                      Or fastest delivery Monday, March 25. Order within 18 hrs
                      8 mins.
                    </p>
                  </div>
                </div>
                <div
                  className="text-sm mt-2 flex text-blue-800"
                  onClick={() => setOpenLocationModal(true)}
                >
                  <img
                    className="size-4"
                    src="/Images/map cursor.png"
                    alt="Map_cursor"
                  />
                  Deliver To <p className="ml-1">{location.slice(0, 5)}..</p>
                  <p className="ml-1">{zipCode}</p>
                </div>
                <LocationDeliverModal />
                <div className="flex flex-col">
                  <h3 className="text-green-700">In Stock</h3>
                  {product && (
                    <>
                      <Button
                        className="mt-2 bg-yellow-400"
                        icon={<FaCartArrowDown />}
                        onClick={() => handleAddtoCart(product.id)}
                      >
                        Add Cart
                      </Button>
                      <Button className="mt-2 bg-orange-500">Buy Now</Button>
                    </>
                  )}
                </div>
                <div className="flex justify-between align-center text-sm">
                  <div className="popover">
                    <p>Ships from</p>
                    <p>Sold by</p>
                    <p>Returns</p>
                  </div>
                  <div>
                    <p>Amazon.com</p>
                    <p>Amazon.com</p>
                    <Popover
                      placement="bottom"
                      content={contentTwo}
                      trigger="click"
                      open={opentwo}
                      onOpenChange={() => setOpenTwo(!opentwo)}
                    >
                      <p className="flex items-center w-28 text-balance text-blue-800 cursor-pointer  hover:text-orange-600">
                        Eligible for Return, Refund or Replacement...
                      </p>
                    </Popover>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-500">Customer Service</p>
                  <p className="w-28">Amazon.com</p>
                </div>
                <div>
                  <h4>Add a Protection Plan:</h4>
                  <div className="flex gap-2">
                    <div className="flex gap-2 flex-col">
                      <Checkbox />
                      <Checkbox />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex text-green-700 gap-1">
                        2-Year Protection{" "}
                        <span className="text-black">for</span>
                        <p className="text-red-700">$39.99</p>
                      </div>
                      <div className="max-w-80 text-green-700">
                        Asurion Complete Protect: One plan covers all eligible
                        past and future purchases (Renews Monthly Until
                        Cancelled)
                        <span className="text-black ml-1">for</span>
                        <p className="text-red-700">$16.99/month</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 gap-2">
                    <Checkbox />
                    <p>Add a gift receipt for easy returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 shadow-xl rounded-xl">
            <ProductsSlider
              itemsSHow={6}
              relativeProp="relative"
              imgHeight={210}
              products={categoryProducts}
            />
          </div>
        </div>
        <ShowCartProcuts />
      </div>
    </SProductPage>
  );
}
