import { useEffect, useState } from "react";
import { SPurchasePage } from "./SPurchasePage";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import Input from "antd/es/input/Input";
import { Select, Checkbox, Skeleton, Button } from "antd";
export function PurchasePage() {
  const {
    location,
    CartTotalprice,
    setLocation,
    zipCode,
    setZipCode,
    countries,
    states,
  } = useGlobalProvider();
  const [isChange, setChange] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [newLocation, setNewLocation] = useState<string>("");
  const [newZipCode, setNewZipcode] = useState<string>("");
  const [turnBack, setTurnBack] = useState<Boolean>(false);
  const [iseveryValue, setIsEveryValue] = useState<boolean>(false);

  type DeliverData = {
    phoneNumber: string;
    address: string;
    addressTwo: string;
    fullName: string;
    city: string;
    region: string;
  };

  const [deliverData, setDeliverdata] = useState<DeliverData>({
    phoneNumber: "",
    address: "",
    addressTwo: "",
    fullName: "",
    city: "",
    region: "",
  });

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
    if (location === "" || zipCode === "") {
      const address = localStorage.getItem("location");
      const zipCode = localStorage.getItem("zipCode");
      if (address && zipCode) {
        setLocation(address);
        setZipCode(zipCode);
      } else if (!location && !zipCode) {
        setChange(true);
        setTurnBack(true);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const handleChangeSelect = (value: string) => {
    setNewLocation(value);
  };

  const handleChangeSelectTwo = (value: string) => {
    setNewLocation(value);
    setChange(true);
  };

  const handleChangeBtn = () => {
    ClearDeliverData();
    setNewLocation(location);
    setChange(true);
  };

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
    if (
      Object.values(deliverData).every((value: string) => value !== "") &&
      newLocation !== "" &&
      newZipCode !== ""
    ) {
      localStorage.setItem("zipCode", newZipCode);
      localStorage.setItem("location", newLocation);
      const newzipCode = localStorage.getItem("zipCode");
      const newlocation = localStorage.getItem("location");
      if (newzipCode && newlocation) {
        setLocation(newlocation);
        setZipCode(newzipCode);
        ClearDeliverData();
      }
      setChange(false);
    } else {
      setIsEveryValue(true);
      setTimeout(() => {
        setIsEveryValue(false);
      }, 3000);
    }
  }

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
          <p className="py-2 text-xl font-medium text-red-800">
            Enter a your shipping address
          </p>
          <p>{CartTotalprice}</p>
          <div className="content-2 flex justify-between gap-6">
            <div className="border-solid border-slate-400 p-6 border rounded-lg border w-full">
              <div className="w-5/6">
                {isChange ? (
                  <div>
                    <div className="flex flex-col gap-4">
                      {!turnBack && (
                        <a
                          onClick={() => setChange(false)}
                          className="text-blue-400 cursor-pointer hover:text-blue-500"
                        >
                          {"<"} turn back
                        </a>
                      )}
                      <h2>Add a New Address</h2>
                      <div>
                        <p className="text-base font-medium">Country/Region</p>
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
                          <p className="text-base font-medium">Phone number</p>
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
                        <p className="text-sm text-gray-400">Country/Region</p>
                        <p className="text-lg">{location}</p>
                        <div className="bg-gray-400 w-full h-px"></div>
                        <p className="text-sm text-gray-400">ZipCode</p>
                        <p className="text-lg">{zipCode}</p>
                      </div>
                      <button
                        onClick={handleChangeBtn}
                        className="address-btn bg-yellow-400 hover:bg-yellow-500"
                      >
                        Change
                      </button>
                    </div>
                    <div>
                      <div>
                        <p className="text-base font-medium">Country/Region</p>
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
                            type="text"
                            placeholder="Full Name"
                          />
                        </div>
                        <div>
                          <p className="text-base font-medium">Phone number</p>
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
                                style={{ width: 200 }}
                              >
                                {states.map(
                                  (item: { Name: string; id: string }) => {
                                    return (
                                      <Select.Option key={item.id}>
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
                              <p className="text-base font-medium">ZIP Code</p>
                              <Input disabled value={zipCode} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-2 flex gap-2">
                        <Checkbox />
                        <p>Make this my default address</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="border-solid p-5 border rounded-lg border">
              fhgfhdghdgggdfgetg3regeged
            </div>
          </div>
        </div>
      )}
    </SPurchasePage>
  );
}
