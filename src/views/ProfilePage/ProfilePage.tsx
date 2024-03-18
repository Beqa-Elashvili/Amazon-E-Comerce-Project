import { Button } from "antd";
import { useGetUserData } from "@src/hooks/useGetUserData";
import { TfiEmail } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
  const navigate = useNavigate();
  const { userdata } = useGetUserData();
  const { setForChange } = useGlobalProvider();

  const handleChangeWord = (
    value: string | undefined | number,
    kay: string | number | undefined
  ) => {
    localStorage.setItem("kay", String(kay));
    localStorage.setItem("value", String(value));
    setForChange({ kay, value });
    navigate("/User&Info&Change");
  };

  return (
    <div className="flex justify-center p-10">
      <div className="w-2/5 lg:2/5">
        <div className="flex items-center">
          <h3 className="text-start text-blue-900">Profile {">"}</h3>
          <p className="text-orange-700 ml-2">Login & Security</p>
        </div>
        <h2 className="mt-2">Login & Security</h2>
        <div className=" flex-col border-solid border rounded-lg border-slate-300 mt-1">
          <div className="p-5 flex justify-between">
            <div>
              <div className="flex">
                <MdOutlineDriveFileRenameOutline />
                <h4 className="ml-1">First Name</h4>
              </div>
              <p className="mt-2">{userdata?.first_name}</p>
            </div>
            <Button
              className="px-14 shadow"
              onClick={() =>
                handleChangeWord(userdata?.first_name, "First Name")
              }
            >
              Edit
            </Button>
          </div>
          <div className="bg-slate-300 h-px w-full"></div>
          <div className="p-5 flex justify-between">
            <div>
              <div className="flex">
                <MdOutlineDriveFileRenameOutline />
                <h4 className="ml-1">Last Name</h4>
              </div>
              <p className="mt-2">{userdata?.last_name}</p>
            </div>
            <Button
              className="px-14 shadow"
              onClick={() => handleChangeWord(userdata?.last_name, "Last Name")}
            >
              Edit
            </Button>
          </div>
          <div className="bg-slate-300 h-px w-full"></div>

          <div className="p-5 flex justify-between">
            <div>
              <div className="flex">
                <TfiEmail />
                <h4 className="ml-1">Email</h4>
              </div>
              <p className="mt-2">{userdata?.email}</p>
            </div>
            <Button
              className="px-14 shadow"
              onClick={() => handleChangeWord(userdata?.email, "Email")}
            >
              Edit
            </Button>
          </div>
          <div className="bg-slate-300 h-px w-full"></div>
          <div className="p-5 flex justify-between">
            <div>
              <div className="flex">
                <TiPhoneOutline />
                <h4>Phone Number</h4>
              </div>
              <p className="mt-2">{userdata?.phone_number}</p>
            </div>
            <Button
              className="px-14 shadow"
              onClick={() =>
                handleChangeWord(userdata?.phone_number, "Phone Number")
              }
            >
              Edit
            </Button>
          </div>
          <div className="bg-slate-300 h-px w-full"></div>
          <div className="p-5">
            <h4>Role</h4>
            <div className="flex items-center">
              <FaRegUserCircle className="text-black" />
              <p className="ml-1">{userdata?.role}</p>
            </div>
          </div>
          <div className="bg-slate-300 h-px w-full"></div>

          <div className="p-5">
            <h4>Verified</h4>
            <div>
              {userdata?.verified === true ? (
                <div className="flex mt-2">
                  <FaCheckCircle className="text-green-600" />
                  <p className="text-green-500 ml-1">Verifed</p>
                </div>
              ) : (
                <div className="flex mt-2">
                  <FaCheckCircle className="text-red-600" />
                  <p className="text-red-500 ml-1">Not Verifed</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
