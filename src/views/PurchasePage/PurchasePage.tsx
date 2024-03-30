import { useEffect, useState } from "react";
import { SPurchasePage } from "./SPurchasePage";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import Input from "antd/es/input/Input";
import { Select, Checkbox, Skeleton, Button, Divider, Modal } from "antd";
import { MdOutlineRotateRight } from "react-icons/md";
import React from "react";
import Cards, { Focused } from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";
import { FaCreditCard } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { usePurchaseItems } from "@src/hooks/usePurchaseItems";
import { FaCcAmazonPay } from "react-icons/fa";

export function PurchasePage() {
  const { location, setLocation, zipCode, setZipCode, countries, states } =
    useGlobalProvider();
  const [isChange, setChange] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [newLocation, setNewLocation] = useState<string>("");
  const [newZipCode, setNewZipcode] = useState<string>("");
  const [turnBack, setTurnBack] = useState<Boolean>(false);
  const [iseveryValue, setIsEveryValue] = useState<boolean>(false);
  const [SumTotal, setSumTotal] = useState<number>();
  const [isEverythingOkay, setIsEverythingOkay] = useState<boolean>(false);
  const [locState, setLocState] = useState<string>("Alabama");
  const [shippingCost, setShipingCost] = useState<number>();
  const [ProductsPrice, setProductsPrice] = useState<number>(0);
  const [ProductsCaunt, setProductsCaunt] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { PurchaseItems } = usePurchaseItems();
  const { price, caunt } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState<PaymentState>({
    cvc: "",
    expiry: "",
    focus: undefined,
    name: "",
    number: "",
  });

  const [deliverData, setDeliverdata] = useState<DeliverData>({
    phoneNumber: "",
    address: "",
    addressTwo: "",
    fullName: "",
    city: "",
    region: "",
  });
  const [numberes, setNumberes] = useState<numberes>({
    numberOne: 0,
    numberTwo: 0,
    numberThree: 0,
  });

  type numberes = {
    numberOne: number;
    numberTwo: number;
    numberThree: number;
  };

  type DeliverData = {
    phoneNumber: string;
    address: string;
    addressTwo: string;
    fullName: string;
    city: string;
    region: string;
  };

  const ClearDeliverData = () => {
    const clearedData: DeliverData = {
      phoneNumber: "",
      address: "",
      addressTwo: "",
      fullName: "",
      city: "",
      region: "",
    };
    setDeliverdata(clearedData);
  };

  type PaymentState = {
    cvc: string;
    expiry: string;
    focus: Focused | undefined | string;
    name: string;
    number: string;
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;

    switch (name) {
      case "cvc":
        if (value.length > 3) {
          const slicedCVC = value.slice(0, 3);
          setState({ ...state, cvc: slicedCVC });
          break;
        }
        setState({ ...state, cvc: value });
        break;
      case "expiry":
        if (value.length > 4) {
          const slicedCVC = value.slice(0, -1);
          setState({ ...state, expiry: slicedCVC });
          break;
        }
        setState({ ...state, expiry: value });
        break;
      case "name":
        if (value.length > 18) {
          const slicedCVC = value.slice(0, -1);
          setState({ ...state, name: slicedCVC });
          break;
        }
        setState({ ...state, name: value });
        break;
      case "number":
        if (value.length > 16) {
          const slicedCVC = value.slice(0, -1);
          setState({ ...state, number: slicedCVC });
          break;
        }
        setState({ ...state, number: value });
        break;
      default:
        break;
    }
  };

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "phoneNumber" && value.length > 9) {
      const newValue = value.slice(0, -1);
      setDeliverdata((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
      return;
    }
    setDeliverdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const address = localStorage.getItem("location");
    const zipCode = localStorage.getItem("zipCode");
    if (address && zipCode) {
      setNewLocation(address);
      setNewZipcode(zipCode);
      setLocation(address);
      setZipCode(zipCode);
    } else if (!location && !zipCode) {
      setChange(true);
      setTurnBack(true);
    }
    setLoading(false);
  }, []);

  const handleNewZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 5) {
      const sliced = value.slice(0, -1);
      setNewZipcode(sliced);
      return;
    }
    setNewZipcode(event.target.value);
  };

  function handleOk() {
    if (!isChange && location) {
      setDeliverdata((prevState) => ({
        ...prevState,
        region: location,
      }));
    }
    if (Object.values(deliverData).every((value: string) => value === "")) {
      setIsEveryValue(true);
      setTimeout(() => {
        setIsEveryValue(false);
      }, 3000);
      return;
    } else if (deliverData.phoneNumber.length < 9) {
      alert("phoneNumber must be 9 charecters");
      return;
    } else if (
      Object.values(deliverData).every((value: string) => value !== "") &&
      newLocation !== "" &&
      newZipCode !== "" &&
      locState !== ""
    ) {
      localStorage.setItem("zipCode", newZipCode);
      localStorage.setItem("location", newLocation);
      const newzipCode = localStorage.getItem("zipCode");
      const newlocation = localStorage.getItem("location");
      if (newzipCode && newlocation) {
        setLocation(newlocation);
        setZipCode(newzipCode);
        setIsEverythingOkay(true);
      }
      setChange(false);
    } else {
      setIsEveryValue(true);
      setTimeout(() => {
        setIsEveryValue(false);
      }, 3000);
    }
  }

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const randomNumberOne = getRandomNumber(0, 50);
    const randomNumberTwo = getRandomNumber(0, 50);
    const randomNumberThree = getRandomNumber(0, 50);
    setNumberes((prev) => ({
      ...prev,
      numberOne: randomNumberOne,
      numberTwo: randomNumberTwo,
      numberThree: randomNumberThree,
    }));
  }, []);

  useEffect(() => {
    function sumTotalPrices() {
      setLoading(true);
      let totalPrices = 0;
      let ShippingPrice = 0;
      if (price && caunt) {
        const ProductPrice = parseFloat(price);
        const ProductCaunt = parseInt(caunt);
        setProductsPrice(ProductPrice);
        setProductsCaunt(ProductCaunt);
        const totalNumericPrice = ProductPrice * ProductCaunt;
        if (
          numberes.numberOne &&
          numberes.numberTwo &&
          numberes.numberThree &&
          totalNumericPrice
        ) {
          totalPrices =
            totalNumericPrice +
            numberes.numberOne +
            numberes.numberTwo +
            numberes.numberThree;

          ShippingPrice =
            numberes.numberOne + numberes.numberTwo + numberes.numberThree;
          setShipingCost(ShippingPrice);
          setSumTotal(totalPrices);
        }
      }
      setLoading(false);
    }
    sumTotalPrices();
  }, [price, ProductsCaunt, numberes, setShipingCost, setSumTotal]);

  const handleChangeSelect = (value: string) => {
    setNewLocation(value);
  };

  const handleChangeSelectTwo = (value: string) => {
    setNewLocation(value);
    ClearDeliverData();
    setChange(true);
  };

  const handleChangeBtn = () => {
    ClearDeliverData();
    setIsEverythingOkay(false);
    setNewLocation(location);
    setChange(true);
  };

  const handleLocState = (value: string) => {
    setLocState(value);
  };

  const handleTurnBack = () => {
    ClearDeliverData();
    setChange(false);
  };

  const handlePurchase = () => {
    if (
      Object.values(state).every((value) => value === "" || value === undefined)
    ) {
      setIsEveryValue(true);
      setTimeout(() => {
        setIsEveryValue(false);
      }, 3000);
      return;
    }
    if (state.number.length < 16) {
      alert("Card number must be 16 charecters");
    } else if (state.cvc.length < 3) {
      alert("CvC must be 3 charecters");
      return;
    } else if (state.expiry.length < 4) {
      alert("Expiry must be 4 charecters");
      return;
    } else {
      PurchaseItems(ProductsPrice, ProductsCaunt);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        navigate("/");
      }, 1500);
    }
  };

  return (
    <SPurchasePage>
      {loading ? (
        <Skeleton
          avatar={true}
          paragraph={{ rows: 10, width: ["50%", "75%", "60%"] }}
          loading={true}
          active
        />
      ) : (
        <div>
          {isEverythingOkay ? (
            <p className="py-2 text-xl font-medium text-red-800">
              Checkout & Buy
            </p>
          ) : (
            <p className="py-2 text-xl font-medium text-red-800">
              Enter a your shipping address
            </p>
          )}
          <div className="content-2 flex justify-between gap-6">
            {isEverythingOkay ? (
              <div className="bg-orange-100 rounded-lg p-4">
                <div
                  id="PurchasePage"
                  className="CreditCard flex flex-col gap-4 justify-around"
                >
                  <Cards
                    cvc={state.cvc}
                    expiry={state.expiry}
                    focused={state.focus}
                    name={state.name}
                    number={state.number}
                  />
                  <div>
                    <FaCreditCard className="float-end size-8 text-orange-700" />
                    <form>
                      <Input
                        type="number"
                        className="w-3/6"
                        value={state.number}
                        name="number"
                        placeholder="Card Number"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />
                      <Input
                        type="text"
                        value={state.name}
                        name="name"
                        className="mt-1 w-3/5"
                        placeholder="Name"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />

                      <Input
                        type="number"
                        value={state.expiry}
                        name="expiry"
                        className="mt-1 w-4/6"
                        placeholder="MM/YY Expiry"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />

                      <Input
                        type="number"
                        value={state.cvc}
                        name="cvc"
                        className="mt-1 w-5/6"
                        placeholder="CVC"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />
                    </form>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    onClick={handlePurchase}
                    className="btn mt-2 text-base w-2/5"
                  >
                    Buy
                  </Button>
                  {iseveryValue && (
                    <div className="bg-red-200 my-2 border-solid border-2 border-red-700 w-3/5 rounded-xl px-6 py-1">
                      <p className="opacity-100">
                        Please provide all necessary information
                      </p>
                    </div>
                  )}
                </div>
                <Modal
                  centered
                  footer={false}
                  open={isModalOpen}
                  style={{
                    padding: 100,
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <FaCcAmazonPay className="float-start size-12 absolute left-2 text-orange-700" />
                  <h1 className="p-2 text-orange-600">Purchase Succesfully</h1>
                </Modal>
              </div>
            ) : (
              <div className="border-solid border-slate-400 p-6 border rounded-lg border w-full">
                <p></p>
                <div className="w-5/6">
                  {isChange ? (
                    <div>
                      <div className="flex flex-col gap-4">
                        {!turnBack && (
                          <a
                            onClick={handleTurnBack}
                            className="text-blue-400 cursor-pointer hover:text-blue-500"
                          >
                            {"<"} turn back
                          </a>
                        )}
                        <h2>Add a New Address</h2>
                        <div>
                          <p className="text-base font-medium">
                            Country/Region
                          </p>
                          <Select
                            value={newLocation}
                            onChange={handleChangeSelect}
                            placeholder={"Choose the Country"}
                            className="w-full rounded-lg shadow-md  bg-gray-100  cursor-pointer"
                          >
                            {countries.map(
                              (item: { country: string }, index: number) => (
                                <Select.Option value={item.country} key={index}>
                                  {item.country}
                                </Select.Option>
                              )
                            )}
                          </Select>
                        </div>
                        <div className="inputs">
                          <div>
                            <p className="text-base font-medium">
                              Full name (First and Last name)
                            </p>
                            <Input
                              value={deliverData.fullName}
                              type="text"
                              name="fullName"
                              placeholder="Full Name"
                              onChange={handleUserData}
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium">
                              Street Address
                            </p>
                            <Input
                              value={deliverData.address}
                              name="address"
                              type="text"
                              placeholder="Street address or P.O Box"
                              onChange={handleUserData}
                            />
                            <Input
                              value={deliverData.addressTwo}
                              name="addressTwo"
                              className="mt-1"
                              type="text"
                              placeholder="Apt, suite, unit, builidings, floor, etc."
                              onChange={handleUserData}
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium">City</p>
                            <Input
                              onChange={handleUserData}
                              value={deliverData.city}
                              name="city"
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium">
                              State / Province / Region
                            </p>
                            <Input
                              onChange={handleUserData}
                              name="region"
                              value={deliverData.region}
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium">Zip Code</p>
                            <Input
                              type="number"
                              maxLength={5}
                              value={newZipCode}
                              onChange={handleNewZipCode}
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium">
                              Phone number
                            </p>
                            <Input
                              value={deliverData.phoneNumber}
                              name="phoneNumber"
                              onChange={handleUserData}
                              type="number"
                              maxLength={9}
                              placeholder="Phone number"
                            />
                            <p className="text-xs mt-1 text-slate-600">
                              May be used to assist delivery
                            </p>
                          </div>
                          <div>
                            <p className="text-base font-medium">State</p>
                            <Select
                              className="border-slate-300 shadow rounded-md"
                              id="state"
                              value={locState}
                              onChange={handleLocState}
                              disabled={isEverythingOkay}
                              style={{ width: 200 }}
                            >
                              {states.map(
                                (item: { Name: string; id: string }) => {
                                  return (
                                    <Select.Option
                                      value={item.Name}
                                      key={item.id}
                                    >
                                      {item.Name}
                                    </Select.Option>
                                  );
                                }
                              )}
                            </Select>
                          </div>
                        </div>
                        {iseveryValue && (
                          <div className="bg-red-200 border-solid border-2 border-red-700 w-3/5 rounded-xl px-6 py-2 pb-10">
                            <p className="opacity-100">
                              Please provide all necessary information
                            </p>
                          </div>
                        )}
                        <Button
                          onClick={handleOk}
                          className="btn text-base w-2/5"
                        >
                          Use this address
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex gap-2 mb-4">
                        <div className="current-Address">
                          <p className="text-sm text-gray-400">
                            Country/Region
                          </p>
                          <p className="text-lg">{location}</p>
                          <div className="bg-gray-400 w-full h-px"></div>
                          <p className="text-sm text-gray-400">ZipCode</p>
                          <p className="text-lg">{zipCode}</p>
                        </div>
                        <button
                          onClick={handleChangeBtn}
                          className="address-btn bg-yellow-400 hover:bg-yellow-500"
                        >
                          <MdOutlineRotateRight className="size-12 text-yellow-900" />
                        </button>
                      </div>
                      <div>
                        <div>
                          <p className="text-base font-medium">
                            Country/Region
                          </p>
                          <Select
                            value={location}
                            onChange={handleChangeSelectTwo}
                            className="w-full shadow-md rounded-lg cursor-pointer"
                          >
                            {countries.map(
                              (item: { country: string }, index: number) => (
                                <Select.Option
                                  value={item.country}
                                  className="bg-white px-8"
                                  key={index}
                                >
                                  {item.country}
                                </Select.Option>
                              )
                            )}
                          </Select>
                        </div>
                        <div className="inputs mt-4">
                          <div>
                            <p className="text-base font-medium">
                              Full name (First and Last name)
                            </p>
                            <Input
                              name="fullName"
                              value={deliverData.fullName}
                              onChange={handleUserData}
                              disabled={isEverythingOkay}
                              type="text"
                              placeholder="Full Name"
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium">
                              Phone number
                            </p>
                            <Input
                              name="phoneNumber"
                              type="number"
                              value={deliverData.phoneNumber}
                              onChange={handleUserData}
                              placeholder="Phone number"
                            />
                            <p className="text-xs mt-1 font-normal">
                              May be used to assist delivery
                            </p>
                          </div>
                          <div>
                            <p className="text-base font-medium">Address</p>
                            <Input
                              name="address"
                              value={deliverData.address}
                              onChange={handleUserData}
                              type="text"
                              placeholder="Street address or P.O Box"
                            />
                            <Input
                              name="addressTwo"
                              value={deliverData.addressTwo}
                              onChange={handleUserData}
                              className="mt-1"
                              type="text"
                              placeholder="Apt, suite, unit, builidings, floor, etc."
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="text-base font-medium">City</p>
                              <Input
                                name="city"
                                value={deliverData.city}
                                onChange={handleUserData}
                              />
                            </div>
                            <div>
                              <div>
                                <p className="text-base font-medium">State</p>
                                <Select
                                  defaultValue={"Alabama"}
                                  className="border-slate-300 shadow rounded-md"
                                  id="state"
                                  value={locState}
                                  onChange={handleLocState}
                                  style={{ width: 200 }}
                                >
                                  {states.map(
                                    (item: { Name: string; id: string }) => {
                                      return (
                                        <Select.Option
                                          value={item.Name}
                                          key={item.id}
                                        >
                                          {item.Name}
                                        </Select.Option>
                                      );
                                    }
                                  )}
                                </Select>
                              </div>
                            </div>
                            <div>
                              <div>
                                <p className="text-base font-medium">
                                  ZIP Code
                                </p>
                                <Input disabled value={zipCode} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-2 flex gap-2">
                          <Checkbox />
                          <p>Make this my default address</p>
                        </div>
                        {iseveryValue && (
                          <div className="bg-red-200 m-2 border-solid border-2 border-red-700 w-3/5 rounded-xl px-6 py-2 pb-10">
                            <p className="opacity-100">
                              Please provide all necessary information
                            </p>
                          </div>
                        )}
                        <Button
                          onClick={handleOk}
                          className="btn mt-2 text-base w-2/5"
                        >
                          Use this address
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div>
              <div className="sticky top-4">
                <div className="border-solid border max-w-[400px] text-center rounded-t-lg border-slate-400 p-6">
                  <p className="text-balance text-xs font-medium">
                    Choose a shipping address to continue checking out. You'll
                    still have a chance to review and edit your order before
                    it's final.
                  </p>
                  <hr className="mt-2" />
                  <h3 className="text-start mt-2">Order Summary</h3>
                  <div className="text-balance flex flex-col gap-1 text-xs font-medium">
                    <div className="flex justify-between">
                      <p>items</p>
                      <p>( {caunt} )</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Shipping & handling:</p>
                      <p>${numberes.numberOne}</p>
                    </div>
                    <div>
                      <hr className="w-2/6 float-end" />
                    </div>
                    <div className="flex justify-between">
                      <p>Total before tax:</p>
                      <p>${numberes.numberTwo}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Estimate tax to be Collected</p>
                      <p>${numberes.numberThree}</p>
                    </div>
                  </div>
                  <hr className="mb-2 mt-1" />
                  <div className="flex flex-col gap-1">
                    <div className="flex text-xs text-orange-600 justify-between">
                      <h3>Products</h3>
                      <h3>${price}</h3>
                    </div>
                    <div className="flex text-orange-600 text-xs justify-between">
                      <h3>Shipping Price</h3>
                      <h3>${shippingCost}</h3>
                    </div>
                    <div className="flex justify-between">
                      <h3 className="text-red-800">Order Total</h3>
                      <h3 className="text-red-800">${SumTotal}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-slate-200 border-solid border border-t-0 border-slate-400 rounded-b-lg text-center">
                  <a
                    className="text-xs font-medium no-underline hover:underline"
                    href="https://www.amazon.com/gp/help/customer/display.html/ref=chk_help_shipcosts_pri?nodeId=GGE5X8EV7VNVTK6R&ie=UTF8&ref_=chk_help_shipcosts_pri"
                  >
                    How are shipping costs calculated?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SPurchasePage>
  );
}
