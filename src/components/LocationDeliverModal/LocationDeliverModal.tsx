import { SetStateAction, useEffect, useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Modal, Input } from "antd";
import { AiFillAmazonSquare } from "react-icons/ai";

export function LocationDeliverModal() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [tempZipCode, setTempZipCode] = useState<string>("");
  const [tempLocation, setTempLocation] = useState<string>("");
  const [successModalVisible, setSuccessModalVisible] =
    useState<boolean>(false);

  const {
    countries,
    openLocationModal,
    setOpenLocationModal,
    setZipCode,
    setLocation,
  } = useGlobalProvider();

  const handleOk = () => {
    setConfirmLoading(true);
    if (tempZipCode === "" || tempLocation === "") {
      alert("Please input your Location And ZipCode");
      setConfirmLoading(false);
      return;
    }
    if (tempZipCode.length !== 5) {
      alert("ZipCode must be 5 charecters");
      setConfirmLoading(false);
      return;
    } else if (tempZipCode && tempLocation) {
      setZipCode(tempZipCode);
      setLocation(tempLocation);
      localStorage.setItem("location", tempLocation);
      localStorage.setItem("zipCode", tempZipCode);
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

  const handleZipcode = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTempZipCode(event.target.value);
  };

  const handleSelect = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTempLocation(event.target.value);
  };

  return (
    <>
      <Modal
        className="p-20"
        title="Choose your location"
        open={openLocationModal}
        onOk={handleOk}
        onCancel={() => setOpenLocationModal(false)}
        confirmLoading={confirmLoading}
      >
        <div>
          <p>
            Delivery options and delivery speeds may vary for different
            locations
          </p>
          <div className="flex mt-4 items-center justify-center">
            <div className="h-px w-full bg-slate-400"></div>
            <p className="px-1 w-full text-gray-600">enter a zip code</p>
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
