import { SetStateAction, useEffect, useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Modal, Input } from "antd";
import { AiFillAmazonSquare } from "react-icons/ai";

export function LocationDeliverModal(): JSX.Element {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [tempZipCode, setTempZipCode] = useState<string>("");
  const [tempLocation, setTempLocation] = useState<string>("");
  const [successModalVisible, setSuccessModalVisible] =
    useState<boolean>(false);

  const {
    countries,
    openLocationModal,
    setZipCode,
    setOpenLocationModal,
    setLocation,
    location,
    zipCode,
  } = useGlobalProvider();

  const handleOk = () => {
    setConfirmLoading(true);
    if (tempZipCode === "" || tempLocation === "") {
      alert("Please input your Location And ZipCode");
      setConfirmLoading(false);
      return;
    }
    if (tempZipCode.length !== 5) {
      alert("zip Code must be 5 charecters");
      setConfirmLoading(false);
      return;
    }
    if (tempZipCode && tempLocation) {
      setZipCode(tempZipCode);
      setLocation(tempLocation);
      localStorage.setItem("location", tempLocation);
      localStorage.setItem("zipCode", tempZipCode);
      setTempLocation("");
      setTempZipCode("");
      setConfirmLoading(false);
      setOpenLocationModal(false);
      setSuccessModalVisible(true);
    }
    setTimeout(() => {
      setOpenLocationModal(false);
      setSuccessModalVisible(false);
    }, 1500);
  };

  useEffect(() => {
    const storedZipCode = localStorage.getItem("zipCode");
    const storedlocation = localStorage.getItem("location");
    if (storedZipCode && storedlocation) {
      setZipCode(storedZipCode);
      setLocation(storedlocation);
    }
  }, []);

  const handleZipcode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 5) {
      const sliced = value.slice(0, -1);
      setTempZipCode(sliced);
      return;
    }
    setTempZipCode(event.target.value);
  };

  const handleSelect = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTempLocation(event.target.value);
  };

  const handleCancel = () => {
    setTempLocation("");
    setTempZipCode("");
    setOpenLocationModal(false);
  };

  return (
    <>
      <Modal
        className="p-2 lg:p-20"
        title="Choose your location"
        open={openLocationModal}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
      >
        <div>
          <div className="text-center my-2 text-base text-blue-800 flex justify-around bg-orange-300 p-2 rounded-xl">
            <div>
              <p className="">Your Current Location:</p>
              <p className="text-start">your Zip Code:</p>
            </div>
            <div>
              <p>{location.slice(0, 10)}...</p>
              <p className="text-start">{zipCode}</p>
            </div>
          </div>
          <p>
            Delivery options and delivery speeds may vary for different
            locations
          </p>
          <div className="flex mt-4 items-center justify-center">
            <div className="h-px w-full bg-slate-400"></div>
            <div className=" text-center">
              <p className="text-gray-600 w-28">enter a zip code</p>
            </div>
            <div className="h-px w-full bg-slate-400"></div>
          </div>
          <Input
            value={tempZipCode}
            onChange={handleZipcode}
            type="number"
            maxLength={5}
            className=" mt-2 p-1 w-full rounded shadow-md border-solid border border-slate-300  hover:bg-gray-200 text-sm"
          />
          <div className=" mt-2 flex items-center justify-center">
            <div className="h-px w-full bg-slate-400"></div>
            <p className=" px-5 text-gray-600">And</p>
            <div className="h-px w-full bg-slate-400"></div>
          </div>
          <select
            value={tempLocation}
            onChange={handleSelect}
            className=" mt-2 w-full p-2 rounded-xl shadow-md border-solid border-slate-300 bg-gray-100 hover:bg-gray-200 cursor-pointer text-sm"
          >
            {countries.map((item: { country: string }, index: number) => (
              <option key={index}>{item.country}</option>
            ))}
          </select>
        </div>
      </Modal>
      <Modal
        title={<AiFillAmazonSquare className="text-orange-600 size-12" />}
        footer={null}
        open={successModalVisible}
        centered
        style={{ textAlign: "center", padding: 50 }}
      >
        <h1>Address changed successfully</h1>
      </Modal>
    </>
  );
}
