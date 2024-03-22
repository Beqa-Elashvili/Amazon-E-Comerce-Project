import { useGetOneProduct } from "@src/hooks/useGetOneProduct";
import { SProductPage } from "./SProductPage";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Modal, CheckboxProps } from "antd";

export function OneProductPage() {
  const { product } = useGetOneProduct();
  const Brand = product?.title.split(" ")[0];
  const [randomNumber, setRandomNumber] = useState<number>(0);

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
  }, []);

  return (
    <SProductPage>
      <div className="container p-2">
        <img className="size-auto" src={product?.image} alt="product_img" />
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
                <p className="text-xl text-black">${product?.salePrice}</p>
              </div>
              <p className="text-gray-600">List Price: {product?.price}</p>
            </div>
          ) : (
            <p className="text-xl">Price: {product?.price}$</p>
          )}
        </div>
        <div className="box mt-16">
          <div className=" flex items-start bg-blue-200 p-2 rounded text-balance">
            <Checkbox onChange={onChange}></Checkbox>
            <div className="flex ml-2">
              <p className="">
                Add your free 30-day trial of Prime and get fast, free delivery
              </p>
              <img className="h-8" src="/Images/new_prime_logo.png" alt="" />
            </div>
          </div>
          <div className="border-solid border rounded p-2">
            {product?.salePrice !== null ? (
              <p>{product?.salePrice}</p>
            ) : (
              <p>{product.salePrice}</p>
            )}
          </div>
        </div>
      </div>
    </SProductPage>
  );
}
