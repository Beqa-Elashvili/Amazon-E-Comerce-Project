import { Form, Button, Input, Alert } from "antd";
import { RegisterStyle } from "../Authstyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { BaseAxios } from "@src/utils/Base_Axios";
import { TAuthTokens } from "@src/@types/TokensTypes";
import { FormattedMessage } from "react-intl";

export type LoginFormValue = {
  email: string;
  password: string;
};

export function Login(): JSX.Element {
  const [isDivVisible, setDivVisible] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<boolean>(false);
  const { setAuthData } = useAuthProvider();
  const navigate = useNavigate();

  function handleButtonClick(): void {
    setDivVisible(!isDivVisible);
  }

  async function onfinish(values: LoginFormValue) {
    try {
      setAuthLoading(true);
      const resp = await BaseAxios.post("/auth/login", values);
      setAuthData(resp.data as TAuthTokens);
      navigate("/");
    } catch (error: any) {
      setAuthError(true);
    } finally {
      setAuthLoading(false);
    }
  }

  return (
    <RegisterStyle className="flex justify-center items-center flex-col">
      <div className="content">
        <Form<LoginFormValue>
          onFinish={onfinish}
          className="flex flex-col justify-center"
          name="Sign in"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <h1 className="mb-2">
            <FormattedMessage id="Sign-in" defaultMessage={"Sign in"} />
          </h1>
          <h5>
            <FormattedMessage id="Email" defaultMessage={"Email"} />
          </h5>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email !",
              },
            ]}
          >
            <Input autoComplete="off" />
          </Form.Item>
          <h5>
            <FormattedMessage id="Password" defaultMessage={"Password"} />
          </h5>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div>
              <Input.Password autoComplete="off" />
              <div className="flex mt-2">
                <img className="h-4 w-4" src="./Images/Img-!.png" alt="" />
                <p>Passwords must be at least 8 characters.</p>
              </div>
            </div>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
            <Button
              loading={authLoading}
              className="bg-yellow-400"
              style={{ width: 325, color: "black" }}
              type="primary"
              htmlType="submit"
            >
              <FormattedMessage id="Continue" defaultMessage={"Continue"} />
            </Button>
          </Form.Item>
          <p>
            By creating an account, you agree to Amazon's &nbsp;
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">
              Conditions of Use
            </a>
            &nbsp; and &nbsp;
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">
              Privacy Notice
            </a>
            .
          </p>
          <div className="mt-5">
            <button
              onClick={handleButtonClick}
              className="flex border-none bg-white text-blue-400 cursor-pointer hover:underline"
            >
              Need help?
            </button>
            {isDivVisible && (
              <div className="flex flex-col">
                <a href="">Forgot your password?</a>
                <a href="">Other issues with Sign-In</a>
              </div>
            )}
          </div>
          <div className=" mt-5 blur-line text-center"></div>
          <div className="mt-5">
            <h5>Buying for work?</h5>
            <a href="">Shop on Amazon Business</a>
          </div>
          {authError && (
            <Alert
              className="mt-2"
              type="error"
              message="მომხმარებლის იმეილი ან პაროლი არასწორია"
            />
          )}
        </Form>
      </div>
      <div className="flex items-center justify-center">
        <div className="line"></div>
        <p className="p-5 text-gray-600">New to Amazon?</p>
        <div className="line"></div>
      </div>
      <button
        onClick={() => {
          navigate("/Register");
        }}
        className="link-button bg-white hover:bg-gray-100 cursor-pointer"
      >
        <FormattedMessage
          id="Create_Your_Amazon_Account"
          defaultMessage={"Create your Amazon account"}
        />
      </button>
    </RegisterStyle>
  );
}
