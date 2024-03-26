import { SetStateAction, useEffect } from "react";
import { SPurchasePage } from "./SPurchasePage";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import Input from "antd/es/input/Input";
import { Select, Checkbox } from "antd";
import { Option } from "antd/es/mentions";

export function PurchasePage() {
  const { location, setLocation, zipCode, setZipCode, countries, states } =
    useGlobalProvider();

  useEffect(() => {
    if (location === "" || zipCode === "") {
      const address = localStorage.getItem("location");
      const zipCode = localStorage.getItem("zipCode");
      if (address && zipCode) {
        setLocation(address);
        setZipCode(zipCode);
      }
    }
  }, []);

  const handleSelect = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocation(event.target.value);
  };

  return (
    <SPurchasePage>
      <p className="py-2 text-xl font-medium text-red-800">
        Enter a your shipping address
      </p>
      <div className="content-2 flex justify-between gap-6">
        <div className="border-solid p-5 border rounded-lg border w-full">
          <div className="w-5/6">
            <div className="flex gap-2 mb-4">
              <div className="current-Address">
                <p className="text-lg">
                  Country/Region:
                  <span className="ml-1 text-orange-600">{location}</span>
                </p>
                <p className="text-lg">
                  ZipCode:
                  <span className=" ml-1 text-orange-600">{zipCode}</span>
                </p>
              </div>
              <button className="address-btn bg-yellow-400 hover:bg-yellow-500">
                Change
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-base font-medium">Country/Region</p>
                <select
                  value={location}
                  onChange={handleSelect}
                  className="w-full p-2 rounded-xl shadow-md border-solid border-slate-300 bg-gray-100 hover:bg-gray-200 cursor-pointer text-sm"
                >
                  {countries.map((item: { country: string }, index: number) => (
                    <option key={index}>{item.country}</option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-base font-medium">
                  Full name (First and Last name)
                </p>
                <Input type="text" placeholder="Full Name" />
              </div>
              <div>
                <p className="text-base font-medium">Phone number</p>
                <Input type="text" placeholder="Phone number" />
                <p className="text-xs mt-1 font-normal">
                  May be used to assist delivery
                </p>
              </div>
              <div>
                <p className="text-base font-medium">Address</p>
                <Input type="text" placeholder="Street address or P.O Box" />
                <Input
                  className="mt-1"
                  type="text"
                  placeholder="Apt, suite, unit, builidings, floor, etc."
                />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-base font-medium">City</p>
                  <Input />
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
                      {states.map((item: { Name: string; id: string }) => {
                        return (
                          <Select.Option key={item.id}>
                            {item.Name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-base font-medium">ZIP Code</p>
                    <Input />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Checkbox />
                <p>Make this my default address</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-solid p-5 border rounded-lg border">
          fhgfhdghdgggdfgetg3regeged
        </div>
      </div>
    </SPurchasePage>
  );
}
