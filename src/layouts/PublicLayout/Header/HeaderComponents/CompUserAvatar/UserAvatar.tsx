import { useAuthProvider } from "@src/providers/AuthProvider";
import { TAuthorizationStatus_Enum } from "@src/providers/AuthProvider/AuthContext";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, Button, Divider } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function UserAvatar() {
  const navigate = useNavigate();
  const { selectedGender } = useGlobalProvider();
  const { authStatus, userData, logout } = useAuthProvider();

  const hanldeLogOut = () => {
    logout();
    navigate("/");
  };

  const content = (
    <div className=" flex flex-col gap-2">
      <Button onClick={() => navigate("/Profile_Page")}>Profile</Button>
      <Button onClick={() => navigate("/liked_products")}>Wishlist</Button>
      <Button type="primary" danger ghost onClick={() => hanldeLogOut()}>
        Log Out
      </Button>
    </div>
  );
  return (
    <div className="flex items-center ml-1 mr-1">
      {authStatus === TAuthorizationStatus_Enum.AUTHORIZED ? (
        <>
          <div className="border-div hidden lg:block ">
            <Avatar.Group>
              {selectedGender === "Male" ? (
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              ) : (
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=17" />
              )}
              <Avatar style={{ backgroundColor: "#f56a00" }}>
                {userData?.first_name[0].toUpperCase() +
                  "." +
                  userData?.last_name[0].toUpperCase()}
              </Avatar>
              <Popover content={content} placement="bottom">
                <button>
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </button>
              </Popover>
            </Avatar.Group>
          </div>
          <div className="border-div block lg:hidden ">
            <Popover content={content} placement="bottom">
              <button>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </button>
            </Popover>
          </div>
        </>
      ) : (
        <>
          <button
            className="hidden lg:block p-3 flex flex-col text-start justify-center h-14 text-white min-w-[130px]"
            onClick={() => navigate("/Login")}
          >
            <p>
              <FormattedMessage
                id="Hello,sign in"
                defaultMessage={"Hello, Sign in"}
              />
            </p>
            <h4>
              <FormattedMessage
                id="Account-&-Lists"
                defaultMessage={"Account-&-Lists"}
              />
            </h4>
          </button>
          <button
            className="block lg:hidden p-5 flex flex-col text-start justify-center h-10 text-white"
            onClick={() => navigate("/Login")}
          >
            <p>
              <UserOutlined />
            </p>
          </button>
        </>
      )}
    </div>
  );
}
