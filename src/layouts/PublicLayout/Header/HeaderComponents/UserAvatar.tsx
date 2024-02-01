import { useAuthPRovider } from "@src/providers/AuthProvider";
import { TAuthorizationStatus_Enum } from "@src/providers/AuthProvider/AuthContext";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, Button } from "antd";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function UserAvatar() {
  const navigate = useNavigate();
  const { selectedGender } = useGlobalProvider();

  const { authStatus, userData, logout } = useAuthPRovider();

  const content = (
    <div className=" flex flex-col gap-2">
      <Button onClick={() => navigate("/profile")}>Profile</Button>
      <Button type="primary" danger ghost onClick={() => logout()}>
        Log Out
      </Button>
    </div>
  );
  return (
    <div className="flex items-center ml-1 mr-1">
      {authStatus === TAuthorizationStatus_Enum.AUTHORIZED ? (
        <div className="border-div">
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
      ) : (
        <button
          className="p-3 flex flex-col justify-center h-14 text-white"
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
      )}
    </div>
  );
}
